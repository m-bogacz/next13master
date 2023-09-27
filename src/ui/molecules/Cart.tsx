import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "../atoms/ActiveLink";
import { getCartByFromCookies } from "@/api/cartApi";

export const Cart = async () => {
	const cart = await getCartByFromCookies();
	return (
		<ActiveLink
			href={"/cart"}
			className="mt-5 flex  flex-initial items-end justify-end md:ml-5 md:mt-0"
			activeClassName="text-slate-500"
		>
			<ShoppingCart className="text-slate-600" />
			<span className="border-slate-400-100 flex h-4 w-4 items-center justify-center rounded-full border text-xs font-semibold text-slate-600">
				{cart?.orderItems.length ?? 0}
			</span>
		</ActiveLink>
	);
};
