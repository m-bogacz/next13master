import { getFormatPrice } from "@/utils/getFormatPrice";
import { RatingList } from "@/ui/molecules/RatingList";

export const ProductListItemDescription = ({
	name,
	price,
	category,
	description,
	averageRating,
}: {
	name: string;
	price: number;
	category: string;
	description?: string;
	averageRating: number;
}) => {
	return (
		<>
			<section className="mt-3 flex items-center justify-between gap-1">
				<h2 className="text-sm font-semibold text-slate-700">{name}</h2>
				<p className="text-sm font-bold text-slate-900" data-testid="product-price">
					{getFormatPrice(price / 100)}
				</p>
				{description && <p>{description}</p>}
			</section>
			<div>
				<span className="text-sm font-semibold text-slate-600">{category}</span>
				<span className="text-sm font-semibold text-slate-600">
					<RatingList rating={averageRating} />
					<span data-testid="product-rating" className="sr-only">
						{averageRating}
					</span>
				</span>
			</div>
		</>
	);
};
