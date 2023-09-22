import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollectionNameBySlug, getProductsByCollectionsSlug } from "@/api/getProductsList";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> => {
	const category = await getCollectionNameBySlug(params.slug);

	return {
		title: category,
		description: category,
	};
};

export default async function CollectionPage({ params }: { params: { slug: string } }) {
	const category = await getCollectionNameBySlug(params.slug);

	const data = await getProductsByCollectionsSlug(params.slug);

	if (!data) notFound();

	return (
		<>
			<h1>{category}</h1>
			{data.length > 0 ? <ProductList products={data} /> : null}
		</>
	);
}
