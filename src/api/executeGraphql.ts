import { type TypedDocumentString } from "@/gql/graphql";

export async function executeGraphql<TResult, TVariables>({
	query,
	variables,
	cache,
	next,
	headers,
	type = "query",
}: {
	query: TypedDocumentString<TResult, TVariables>;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
	type?: "query" | "mutation";
} & (TVariables extends { [key: string]: never }
	? { variables?: never }
	: { variables: TVariables })): Promise<TResult> {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const HYGRAPH_TOKEN =
		type === "query" ? process.env.HYGRAPH_QUERY_TOKEN : process.env.HYGRAPH_MUTATION_TOKEN;

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		cache,
		next,
		headers: {
			...headers,
			Authorization: `Bearer ${HYGRAPH_TOKEN}`,
			"Content-Type": "application/json",
		},
	});
	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		console.log(graphqlResponse);
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
}
