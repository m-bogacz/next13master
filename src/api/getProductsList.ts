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
} from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (process.env.GRAPHQL_URL === undefined) throw new Error("SERVER_GARPHQL is no defined");

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError("GraphQL Error", {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	if (!graphqlResponse) throw new Error("Product not found");

	return graphqlResponse.products;
};

export const getProductsCountList = async (count = 4) => {
	const graphqlResponse = await executeGraphql(ProductsGetCountListDocument, { count });

	if (!graphqlResponse) throw new Error("Product not found");

	return graphqlResponse.products;
};

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id });

	if (!graphqlResponse.product) notFound();

	return graphqlResponse.product;
};

export const getProductCount = async () => {
	const graphqlResponse = await executeGraphql(ProductCountDocument, {});

	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductListPerPage = async (first = 4, skip = 0) => {
	const graphqlResponse = await executeGraphql(ProductGetPerPageDocument, {
		first,
		skip,
	});

	return graphqlResponse;
};

export const getProductsByCategoryPerPage = async (slug: string, first = 4, skip = 0) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategoryPerPageDocument, {
		slug,
		first,
		skip,
	});

	return graphqlResponse;
};

export const getProductsCountByCategory = async (slug: string) => {
	const graphqlResponse = await executeGraphql(ProductCountByCategoryDocument, { slug });

	return graphqlResponse.categories[0]?.products.length;
};

export const getProductsByCollectionsSlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql(ProductGetByCollectionsSlugDocument, { slug });

	return graphqlResponse.collections[0]?.products;
};

export const getCategoryNameBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql(CategoryNameGetBySlugDocument, { slug });

	return graphqlResponse.categories[0]?.name;
};
export const getCollectionNameBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql(CollectionsNameGetBySlugDocument, { slug });

	return graphqlResponse?.collections[0]?.name;
};

export const getSuggestedProductsByCategorySlug = async (slug: string, first = 4) => {
	const graphqlResponse = await executeGraphql(SuggestedProductsGetByCategorySlugDocument, {
		slug,
		first: first,
	});

	return graphqlResponse.products;
};

export const searchProductsByName = async (name: string) => {
	const graphqlResponse = await executeGraphql(ProductsSearchByNameDocument, {
		name,
	});

	return graphqlResponse.products;
};

export const getCategoriesBySlug = async () => {
	const graphqlResponse = await executeGraphql(CategoriesGetSlugDocument, {});

	return graphqlResponse.categories;
};
