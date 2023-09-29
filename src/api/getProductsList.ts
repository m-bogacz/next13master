import { notFound } from "next/navigation";
import {
	ProductCountByCategoryDocument,
	ProductCountDocument,
	ProductGetByCollectionsSlugDocument,
	ProductGetByIdDocument,
	ProductGetPerPageDocument,
	ProductsGetByCategoryPerPageDocument,
	CategoryNameGetBySlugDocument,
	CollectionsNameGetBySlugDocument,
	type TypedDocumentString,
	ProductsGetListDocument,
	ProductsGetCountListDocument,
	SuggestedProductsGetByCategorySlugDocument,
	ProductsSearchByNameDocument,
	CategoriesGetSlugDocument,
	CollectionsGetAllDocument,
} from "@/gql/graphql";

export async function executeGraphql<TResult, TVariables>({
	query,
	variables,
	cache,
	next,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
} & (TVariables extends { [key: string]: never }
	? { variables?: never }
	: { variables: TVariables })): Promise<TResult> {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

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
			Webhook: process.env.WEBHOOK_HEADERS ?? "",
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
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

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		next: {
			revalidate: 30,
		},
	});

	if (!graphqlResponse) throw new Error("Product not found");

	return graphqlResponse.products;
};

export const getProductsCountList = async (count = 4) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetCountListDocument,
		variables: { count },
	});

	if (!graphqlResponse) throw new Error("Product not found");

	return graphqlResponse.products;
};

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id },
	});

	if (!graphqlResponse.product) notFound();

	return graphqlResponse.product;
};

export const getProductCount = async () => {
	const graphqlResponse = await executeGraphql({ query: ProductCountDocument });

	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductListPerPage = async (first = 4, skip = 0) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetPerPageDocument,
		variables: {
			first,
			skip,
		},
	});

	return graphqlResponse;
};

export const getProductsByCategoryPerPage = async (slug: string, first = 4, skip = 0) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategoryPerPageDocument,
		variables: {
			slug,
			first,
			skip,
		},
	});

	return graphqlResponse;
};

export const getProductsCountByCategory = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductCountByCategoryDocument,
		variables: { slug },
	});

	return graphqlResponse.categories[0]?.products.length;
};

export const getProductsByCollectionsSlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByCollectionsSlugDocument,
		variables: { slug },
	});

	return graphqlResponse.collections[0]?.products;
};

export const getCategoryNameBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CategoryNameGetBySlugDocument,
		variables: { slug },
	});

	return graphqlResponse.categories[0]?.name;
};
export const getCollectionNameBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsNameGetBySlugDocument,
		variables: { slug },
	});

	return graphqlResponse?.collections[0]?.name;
};

export const getSuggestedProductsByCategorySlug = async (slug: string, first = 4) => {
	const graphqlResponse = await executeGraphql({
		query: SuggestedProductsGetByCategorySlugDocument,
		variables: {
			slug,
			first: first,
		},
	});

	return graphqlResponse.products;
};

export const searchProductsByName = async (name: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsSearchByNameDocument,
		variables: {
			name,
		},
	});

	return graphqlResponse.products;
};

export const getCategoriesBySlug = async () => {
	const graphqlResponse = await executeGraphql({ query: CategoriesGetSlugDocument });

	return graphqlResponse.categories;
};
export const getCollectionsAll = async () => {
	const graphqlResponse = await executeGraphql({ query: CollectionsGetAllDocument });

	return graphqlResponse.collections;
};
