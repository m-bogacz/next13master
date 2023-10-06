import { getCategoriesBySlug } from "@/api/getProductsList";

export const generateStaticParams = async () => {
	const categories = await getCategoriesBySlug();

	return categories.map((category) => ({
		slug: category.slug,
	}));
};

export default async function CategoryPageSlugLayout({
	children,
}: {
	children: React.ReactNode;
	params: { slug: string };
}) {
	return <>{children}</>;
}
