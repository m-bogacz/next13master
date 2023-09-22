import { getFormatPrice } from "@/utils/getFormatPrice";
import { ProductImage } from "@/ui/atoms/ProductImage";

type ProductItemProps = {
	name: string;

	coverImage?: string;
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
			<div className="flex items-center gap-20">
				{coverImage && <ProductImage src={coverImage} alt={name} />}
				<div className="flex-3 w-72">
					<span>{description}</span>
					<div className="mt-8 flex w-56 flex-col items-start gap-2">
						<p className="text-lg font-bold text-slate-700">{getFormatPrice(price / 100)}</p>
						<span className="text-sm font-semibold text-slate-600">{category}</span>
					</div>
					<div className="mt-5 flex">
						<span className="mr-2 text-yellow-400">*******</span>
						<span className="borderp-0.5 rounded-lg text-xs text-slate-500">4/5</span>
					</div>
				</div>
			</div>
		</article>
	);
};
