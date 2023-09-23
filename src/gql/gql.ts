/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetSlug {\n  categories {\n    slug\n    name\n  }\n}": types.CategoriesGetSlugDocument,
    "query CategoryNameGetBySlug($slug: String) {\n  categories(where: {slug: $slug}) {\n    name\n  }\n}": types.CategoryNameGetBySlugDocument,
    "query CollectionsNameGetBySlug($slug: String) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n  }\n}": types.CollectionsNameGetBySlugDocument,
    "fragment PaginationPageInfo on PageInfo {\n  hasNextPage\n  hasPreviousPage\n  startCursor\n  endCursor\n  pageSize\n}": types.PaginationPageInfoFragmentDoc,
    "query ProductCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}\n\nquery ProductsCountByCategory($slug: String) {\n  categoriesConnection(where: {slug: $slug}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductCountDocument,
    "query ProductGetByCollectionsSlug($slug: String) {\n  collections(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductGetByCollectionsSlugDocument,
    "query ProductGetById($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetPerPage($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n  productsConnection {\n    pageInfo {\n      ...PaginationPageInfo\n    }\n  }\n}": types.ProductGetPerPageDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories {\n    name\n    slug\n  }\n  price\n  images(first: 1) {\n    url\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategoryPerPage($slug: String, $first: Int, $skip: Int) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}\n\nquery ProductCountByCategory($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      id\n    }\n  }\n}": types.ProductsGetByCategoryPerPageDocument,
    "query ProdutsGetByCategorySlug($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProdutsGetByCategorySlugDocument,
    "query ProductsGetList {\n  products {\n    ...ProductListItem\n  }\n}\n\nquery ProductsGetCountList($count: Int!) {\n  products(first: $count) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsSearchByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    ...ProductListItem\n  }\n}": types.ProductsSearchByNameDocument,
    "query SuggestedProductsGetByCategorySlug($slug: String!, $first: Int) {\n  products(first: $first, where: {categories_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n}": types.SuggestedProductsGetByCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetSlug {\n  categories {\n    slug\n    name\n  }\n}"): typeof import('./graphql').CategoriesGetSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryNameGetBySlug($slug: String) {\n  categories(where: {slug: $slug}) {\n    name\n  }\n}"): typeof import('./graphql').CategoryNameGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsNameGetBySlug($slug: String) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n  }\n}"): typeof import('./graphql').CollectionsNameGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PaginationPageInfo on PageInfo {\n  hasNextPage\n  hasPreviousPage\n  startCursor\n  endCursor\n  pageSize\n}"): typeof import('./graphql').PaginationPageInfoFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}\n\nquery ProductsCountByCategory($slug: String) {\n  categoriesConnection(where: {slug: $slug}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByCollectionsSlug($slug: String) {\n  collections(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetByCollectionsSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetPerPage($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n  productsConnection {\n    pageInfo {\n      ...PaginationPageInfo\n    }\n  }\n}"): typeof import('./graphql').ProductGetPerPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories {\n    name\n    slug\n  }\n  price\n  images(first: 1) {\n    url\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategoryPerPage($slug: String, $first: Int, $skip: Int) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}\n\nquery ProductCountByCategory($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      id\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryPerPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProdutsGetByCategorySlug($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProdutsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    ...ProductListItem\n  }\n}\n\nquery ProductsGetCountList($count: Int!) {\n  products(first: $count) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearchByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsSearchByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductsGetByCategorySlug($slug: String!, $first: Int) {\n  products(first: $first, where: {categories_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').SuggestedProductsGetByCategorySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
