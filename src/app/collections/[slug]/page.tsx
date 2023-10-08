import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCollectionsSlug } from "@/api/getProductsList";

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> => {
	const collection = await getProductsByCollectionsSlug(params.slug);

	return {
		title: collection?.name,
		description: collection?.description,
	};
};

export default async function CollectionPage({ params }: { params: { slug: string } }) {
	const collection = await getProductsByCollectionsSlug(params.slug);

	if (!collection) notFound();

	return (
		<>
			<h1>{collection.name}</h1>
			{collection.products.length > 0 ? <ProductList products={collection.products} /> : null}
		</>
	);
}
