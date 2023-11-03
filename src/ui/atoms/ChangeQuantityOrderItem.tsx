"use client";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { experimental_useOptimistic as useOptimistic } from "react";
import { changeOrderItemQuantity } from "@/actions/cart";

export function ChangeQuantityOrderItem({
	itemId,
	quantity,
}: {
	itemId: string;
	quantity: number;
}) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<div className="flex max-w-lg flex-col items-center">
			<span className="text-lg font-medium text-slate-700">Qunatity</span>
			<section className="mt-1 flex ">
				<form className="flex">
					<button
						className="h-6 w-6 border"
						type="submit"
						data-testid="decrement"
						formAction={async () => {
							setOptimisticQuantity(optimisticQuantity - 1);
							await changeOrderItemQuantity(itemId, optimisticQuantity - 1);
						}}
					>
						-
					</button>
				</form>
				<span data-testid="quantity" className="w-8 text-center">
					{optimisticQuantity}
				</span>
				<form className="flex">
					<button
						className="h-6 w-6 items-baseline border"
						type="submit"
						data-testid="increment"
						formAction={async () => {
							setOptimisticQuantity(optimisticQuantity + 1);
							await changeOrderItemQuantity(itemId, optimisticQuantity + 1);
						}}
					>
						+
					</button>
				</form>
			</section>
		</div>
	);
}
