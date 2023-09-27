import { redirect } from "next/navigation";
import { getCartByFromCookies } from "@/api/cartApi";
import { ShoppingCartItem } from "@/ui/atoms/ShoppingCartItem";

export default async function CartPage() {
	const cart = await getCartByFromCookies();

	if (!cart) {
		redirect("/products");
	}

	return (
		<section>
			<header className="border-b pb-10">
				<h2 className="opacity-9 text-4xl font-bold text-black">Shopping Cart</h2>
			</header>

			<ul className="grid grid-cols-1  divide-y">
				{cart.orderItems.map((item) => {
					if (!item.product) return null;
					return <ShoppingCartItem key={item.id} {...item} />;
				})}
			</ul>
		</section>
	);
}
