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
    "mutation CartAddProduct($orderId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {order: {connect: {id: $orderId}}, product: {connect: {id: $productId}}, quantity: 1, total: $total}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartChangeOrderItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartChangeOrderItemQuantityDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0, email: \"test@wp.pl\", stripeCheckoutId: \"tetete\"}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    ...CartOrderItem\n  }\n}": types.CartFragmentDoc,
    "fragment CartOrderItem on OrderItem {\n  id\n  quantity\n  total\n  product {\n    ...ProductListItem\n  }\n}": types.CartOrderItemFragmentDoc,
    "mutation CartRemoveOrderItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveOrderItemDocument,
    "mutation CartUpsertOrderItem($orderId: ID!, $productId: ID!, $quantity: Int!, $orderItemId: ID) {\n  upsertOrderItem(\n    upsert: {create: {quantity: 1, total: 1, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}, update: {quantity: $quantity}}\n    where: {id: $orderItemId}\n  ) {\n    id\n  }\n}": types.CartUpsertOrderItemDocument,
    "query CategoriesGetSlug {\n  categories {\n    slug\n    name\n  }\n}": types.CategoriesGetSlugDocument,
    "query CategoryNameGetBySlug($slug: String) {\n  categories(where: {slug: $slug}) {\n    name\n  }\n}": types.CategoryNameGetBySlugDocument,
    "query CollectionsNameGetBySlug($slug: String) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n  }\n}": types.CollectionsNameGetBySlugDocument,
    "query CollectionsGetAll {\n  collections {\n    name\n    slug\n    image {\n      url\n    }\n  }\n}": types.CollectionsGetAllDocument,
    "fragment PaginationPageInfo on PageInfo {\n  hasNextPage\n  hasPreviousPage\n  startCursor\n  endCursor\n  pageSize\n}": types.PaginationPageInfoFragmentDoc,
    "query ProductCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}\n\nquery ProductsCountByCategory($slug: String) {\n  categoriesConnection(where: {slug: $slug}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductCountDocument,
    "query ProductGetByCollectionsSlug($slug: String) {\n  collections(where: {slug: $slug}) {\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductGetByCollectionsSlugDocument,
    "query ProductGetById($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n    reviews {\n      ...ReviewsProductItem\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetPerPage($first: Int!, $skip: Int!, $orderBy: ProductOrderByInput) {\n  products(first: $first, skip: $skip, orderBy: $orderBy) {\n    ...ProductListItem\n  }\n  productsConnection {\n    pageInfo {\n      ...PaginationPageInfo\n    }\n  }\n}": types.ProductGetPerPageDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  averageRating\n  categories {\n    name\n    slug\n  }\n  price\n  images(first: 1) {\n    url\n  }\n}": types.ProductListItemFragmentDoc,
    "mutation ProductUpdateAvargeRating($id: ID!, $averageRating: Int!) {\n  updateProduct(where: {id: $id}, data: {averageRating: $averageRating}) {\n    averageRating\n  }\n}": types.ProductUpdateAvargeRatingDocument,
    "query ProductsGetByCategoryPerPage($slug: String, $first: Int, $skip: Int, $orderBy: ProductOrderByInput) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip, orderBy: $orderBy) {\n      ...ProductListItem\n    }\n  }\n}\n\nquery ProductCountByCategory($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      id\n    }\n  }\n}": types.ProductsGetByCategoryPerPageDocument,
    "query ProdutsGetByCategorySlug($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProdutsGetByCategorySlugDocument,
    "query ProductsGetByOrderBy($orderBy: ProductOrderByInput) {\n  products(orderBy: $orderBy) {\n    ...ProductListItem\n  }\n}": types.ProductsGetByOrderByDocument,
    "query ProductsGetList {\n  products {\n    ...ProductListItem\n  }\n}\n\nquery ProductsGetCountList($count: Int!) {\n  products(first: $count) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsSearchByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    ...ProductListItem\n  }\n}": types.ProductsSearchByNameDocument,
    "mutation addReview($productId: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n  publishManyReviewsConnection(to: PUBLISHED, where: {product: {id: $productId}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.AddReviewDocument,
    "query ReviewGetProductAvargeRating($productId: ID!) {\n  reviews(where: {product: {id: $productId}}) {\n    rating\n  }\n}": types.ReviewGetProductAvargeRatingDocument,
    "mutation publishReview($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}": types.PublishReviewDocument,
    "query ReviewsGetProductById($productId: ID!) {\n  reviews(where: {product: {id: $productId}}) {\n    ...ReviewsProductItem\n  }\n}": types.ReviewsGetProductByIdDocument,
    "fragment ReviewsProductItem on Review {\n  name\n  headline\n  rating\n  content\n  id\n  rating\n}": types.ReviewsProductItemFragmentDoc,
    "query SuggestedProductsGetByCategorySlug($slug: String!, $first: Int) {\n  products(first: $first, where: {categories_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n}": types.SuggestedProductsGetByCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {order: {connect: {id: $orderId}}, product: {connect: {id: $productId}}, quantity: 1, total: $total}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeOrderItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartChangeOrderItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0, email: \"test@wp.pl\", stripeCheckoutId: \"tetete\"}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    ...CartOrderItem\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartOrderItem on OrderItem {\n  id\n  quantity\n  total\n  product {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').CartOrderItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveOrderItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveOrderItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartUpsertOrderItem($orderId: ID!, $productId: ID!, $quantity: Int!, $orderItemId: ID) {\n  upsertOrderItem(\n    upsert: {create: {quantity: 1, total: 1, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}, update: {quantity: $quantity}}\n    where: {id: $orderItemId}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartUpsertOrderItemDocument;
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
export function graphql(source: "query CollectionsGetAll {\n  collections {\n    name\n    slug\n    image {\n      url\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetAllDocument;
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
export function graphql(source: "query ProductGetByCollectionsSlug($slug: String) {\n  collections(where: {slug: $slug}) {\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetByCollectionsSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n    reviews {\n      ...ReviewsProductItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetPerPage($first: Int!, $skip: Int!, $orderBy: ProductOrderByInput) {\n  products(first: $first, skip: $skip, orderBy: $orderBy) {\n    ...ProductListItem\n  }\n  productsConnection {\n    pageInfo {\n      ...PaginationPageInfo\n    }\n  }\n}"): typeof import('./graphql').ProductGetPerPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  averageRating\n  categories {\n    name\n    slug\n  }\n  price\n  images(first: 1) {\n    url\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductUpdateAvargeRating($id: ID!, $averageRating: Int!) {\n  updateProduct(where: {id: $id}, data: {averageRating: $averageRating}) {\n    averageRating\n  }\n}"): typeof import('./graphql').ProductUpdateAvargeRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategoryPerPage($slug: String, $first: Int, $skip: Int, $orderBy: ProductOrderByInput) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip, orderBy: $orderBy) {\n      ...ProductListItem\n    }\n  }\n}\n\nquery ProductCountByCategory($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      id\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryPerPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProdutsGetByCategorySlug($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProdutsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByOrderBy($orderBy: ProductOrderByInput) {\n  products(orderBy: $orderBy) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetByOrderByDocument;
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
export function graphql(source: "mutation addReview($productId: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n  publishManyReviewsConnection(to: PUBLISHED, where: {product: {id: $productId}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').AddReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewGetProductAvargeRating($productId: ID!) {\n  reviews(where: {product: {id: $productId}}) {\n    rating\n  }\n}"): typeof import('./graphql').ReviewGetProductAvargeRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation publishReview($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').PublishReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetProductById($productId: ID!) {\n  reviews(where: {product: {id: $productId}}) {\n    ...ReviewsProductItem\n  }\n}"): typeof import('./graphql').ReviewsGetProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewsProductItem on Review {\n  name\n  headline\n  rating\n  content\n  id\n  rating\n}"): typeof import('./graphql').ReviewsProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductsGetByCategorySlug($slug: String!, $first: Int) {\n  products(first: $first, where: {categories_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').SuggestedProductsGetByCategorySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
