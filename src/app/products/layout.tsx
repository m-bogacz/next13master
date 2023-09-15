import { fetchProductsCount } from "@/api/fetchProducts";

export const generateStaticParams = async () => {
	const productsCount = await fetchProductsCount();
	const counts = Array.from({ length: productsCount / 4 }, (_, i) => i + 1);

	return counts.map((count) => ({
		pageNumber: count.toString(),
	}));
};

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return <>{children}</>;
}
