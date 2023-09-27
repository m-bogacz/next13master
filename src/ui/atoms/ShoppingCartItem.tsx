import { ProductImage } from "./ProductImage";

import { ChangeQuantityOrderItem } from "./ChangeQuantityOrderItem";
import { RemoveButton } from "./RemoveButton";
import { getFormatPrice } from "@/utils/getFormatPrice";
import { type CartOrderItemFragment } from "@/gql/graphql";

export const ShoppingCartItem = ({ product, quantity, id }: CartOrderItemFragment) => {
	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<li>
			<article className="flex w-full max-w-screen-lg py-8">
				<div className="max-md:w-52">
					<ProductImage
						src={product.images[0]?.url ?? ""}
						alt={product.name}
						width={100}
						classNameContainer="overflow-hidden rounded-md bg-gray-100"
						className="h-full w-full object-cover object-center p-4"
					/>
				</div>
				<section className="ml-5 flex flex-col">
					<span className="text-lg font-medium text-slate-700">{product.name}</span>
					<div className="text-sm font-medium text-slate-400">
						<span className="">{product.categories[0]?.name}</span>
					</div>
					<span className="text-lg font-medium text-slate-700">
						{getFormatPrice(product.price)}
					</span>
					<div className="mt-auto text-sm text-slate-600">In stock</div>
				</section>
				<div className="ml-10 flex justify-center gap-10">
					<ChangeQuantityOrderItem quantity={quantity} itemId={id} />
					<RemoveButton itemId={id} />
				</div>
			</article>
		</li>
	);
};
