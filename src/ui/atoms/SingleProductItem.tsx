import { ProductListItemCoverImage } from "./ProductListItemCoverImage";

import { getFormatPrice } from "@/utils/getFormatPrice";

type ProductItemProps = {
	name: string;

	coverImage: {
		src: string;
		alt: string;
	};
	price: number;
	category: string;
	description?: string;
};

export const ProductItem = ({
	coverImage,
	price,
	category,
	description,
	name,
}: ProductItemProps) => {
	return (
		<article className="items-center p-4">
			<h1 className="mb-10 text-center text-3xl text-slate-700">{name}</h1>
			<div className="flex items-start gap-4">
				<ProductListItemCoverImage src={coverImage.src} alt={coverImage.alt} />
				<div className="flex-3 w-72">
					<span>{description}</span>
					<div className="mt-8 flex w-56 items-start gap-5">
						<p className="text-sm font-bold text-slate-900">{getFormatPrice(price / 100)}</p>
						<span className="text-sm font-semibold text-slate-600">{category}</span>
					</div>
					<div className="mt-5">
						<span className="mr-2 text-yellow-400">*******</span>
						<span className="rounded-lg border bg-slate-200 p-0.5 text-xs text-slate-500">4.5</span>
					</div>
				</div>
			</div>
		</article>
	);
};
