import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/executeGraphql";
import {
	ProductCountByCategoryDocument,
	ProductCountDocument,
	ProductGetByCollectionsSlugDocument,
	ProductGetByIdDocument,
	ProductGetPerPageDocument,
	ProductsGetByCategoryPerPageDocument,
	CategoryNameGetBySlugDocument,
	CollectionsNameGetBySlugDocument,
	ProductsGetCountListDocument,
	SuggestedProductsGetByCategorySlugDocument,
	ProductsSearchByNameDocument,
	CategoriesGetSlugDocument,
	CollectionsGetAllDocument,
	type ProductOrderByInput,
	ProductsGetListDocument,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
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
		next: {
			tags: ["product"],
		},
	});

	if (!graphqlResponse.product) notFound();

	return graphqlResponse.product;
};

export const getProductCount = async () => {
	const graphqlResponse = await executeGraphql({ query: ProductCountDocument });

	return graphqlResponse.productsConnection.aggregate.count;
};

type ProductListPerPageProps = {
	first: number;
	skip: number;
	orderBy: ProductOrderByInput;
};

export const getProductListPerPage = async ({
	first = 4,
	skip = 0,
	orderBy,
}: ProductListPerPageProps) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetPerPageDocument,
		variables: {
			first,
			skip,
			orderBy,
			// orderBy,
		},
	});

	return graphqlResponse;
};

export const getProductsByCategoryPerPage = async (
	slug: string,
	first = 4,
	skip = 0,
	orderBy: ProductOrderByInput,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategoryPerPageDocument,
		variables: {
			slug,
			first,
			skip,
			orderBy,
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

	return graphqlResponse.collections[0];
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
