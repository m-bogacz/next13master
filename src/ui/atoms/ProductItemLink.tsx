import { ProductListItemCoverImage } from "./ProductListItemCoverImage";
import { ProductListItemDescription } from "./ProductListItemDescription";

type ProductItemProps = {
	name: string;
	coverImage: {
		src: string;
		alt: string;
	};
	price: number;
	category: string;
};

export const ProductItemLink = ({ name, coverImage, price, category }: ProductItemProps) => {
	return (
		<article className="w-72 p-4">
			<ProductListItemCoverImage src={coverImage.src} alt={coverImage.alt} />
			<ProductListItemDescription name={name} price={price} category={category} />
		</article>
	);
};
