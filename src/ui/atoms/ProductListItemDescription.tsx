import { getFormatPrice } from "@/utils/getFormatPrice";

export const ProductListItemDescription = ({
	name,
	price,
	category,
}: {
	name: string;
	price: number;
	category: string;
}) => {
	return (
		<>
			<section className="mt-3 flex items-center justify-between gap-1">
				<h3 className="text-sm font-semibold text-slate-700">{name}</h3>
				<p className="text-sm font-bold text-slate-900">{getFormatPrice(price / 100)}</p>
			</section>
			<span className="text-sm font-semibold text-slate-600">{category}</span>
		</>
	);
};
