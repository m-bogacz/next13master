import { fetchProductsCount } from "@/api/fetchProducts";
import { Pagination } from "@/ui/organisms/Pagination";

export const runtime = "edge";

export const generateStaticParams = async () => {
	const productsCount = await fetchProductsCount();
	const counts = Array.from({ length: productsCount }, (_, i) => i + 1);

	console.log(counts);

	return counts.map((count) => ({
		params: {
			pageNumber: count,
		},
	}));
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<Pagination />
		</>
	);
}
