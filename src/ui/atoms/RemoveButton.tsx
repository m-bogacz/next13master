"use client";

import { removeOrderItem } from "@/actions/cart";

export const RemoveButton = ({ itemId }: { itemId: string }) => {
	return (
		<form className="flex items-start">
			<button
				className="text-red-700"
				type="submit"
				formAction={async () => {
					await removeOrderItem(itemId);
				}}
			>
				X
			</button>
		</form>
	);
};
