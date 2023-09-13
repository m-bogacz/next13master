import { fetchProductsCount, fetchProductsPerPage } from "@/api/fetchProducts";
import { ProductList } from "@/ui/organisms/ProductList";

export const runtime = "edge";

export const generateStaticParams = async () => {
	const productsCount = await fetchProductsCount();

	const counts = Array.from({ length: productsCount }, (_, i) => i + 1);

	return counts.map((count) => ({
		params: {
			pageNumber: count,
		},
	}));
};

export default async function Products({ params }: { params: { pageNumber: string } }) {
	const products = await fetchProductsPerPage(params.pageNumber);

	return <ProductList products={products} />;
}
