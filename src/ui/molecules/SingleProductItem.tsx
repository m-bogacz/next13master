import { RatingList } from "./RatingList";
import { getFormatPrice } from "@/utils/getFormatPrice";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { type ProductListItemFragment } from "@/gql/graphql";
import { getOrCreateCart, addProductToCart } from "@/api/cartApi";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";

export const ProductItem = ({
	images,
	price,
	categories,
	description,
	name,
	id,
	averageRating,
}: ProductListItemFragment) => {
	async function addToCartAction() {
		"use server";

		const cart = await getOrCreateCart();
		await addProductToCart(cart.id, id);
	}
	return (
		<article className="p-4">
			<h1 className="mb-10 text-center text-3xl text-slate-700">{name}</h1>
			<div className="grid gap-20 md:grid-cols-2 ">
				{images[0] && <ProductImage src={images[0].url} alt={name} />}
				<div className="md:max-w-lg">
					<span>{description}</span>
					<div className="mt-8 flex w-full flex-col items-start justify-around gap-2">
						<p className="text-2xl font-bold text-slate-700" data-testid="product-price">
							{getFormatPrice(price / 100)}
						</p>
						{categories.map((category) => {
							return (
								<span key={category.name} className="text-xl font-semibold text-slate-500">
									{category.name}
								</span>
							);
						})}
						<div className="place-baseline mb-2 flex gap-2">
							<span className="text-lg text-yellow-400 ">
								<RatingList rating={averageRating} />
								<span className="sr-only" data-testid="product-rating">
									{averageRating}
								</span>
							</span>
							<span className="borderp-0.5 rounded-lg text-lg  text-slate-500">{`${averageRating}/5`}</span>
						</div>
					</div>
					<form action={addToCartAction}>
						<AddToCartButton />
					</form>
				</div>
			</div>
		</article>
	);
};
