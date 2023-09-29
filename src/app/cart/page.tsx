import { redirect } from "next/navigation";
import Stripe from "stripe";
import { cookies } from "next/headers";
import { getCart } from "@/api/cartApi";
import { ShoppingCartItem } from "@/ui/atoms/ShoppingCartItem";

export default async function CartPage() {
	const cart = await getCart();

	if (!cart) {
		redirect("/products");
	}

	async function handleStripePaymentAction() {
		"use server";

		if (!process.env.STRIPE_SECRET_KEY) {
			throw new Error("Missing STRIPE_SECRET_KEY env variable");
		}

		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
			apiVersion: "2023-08-16",
			typescript: true,
		});

		const cart = await getCart();
		if (!cart) {
			return;
		}

		const session = await stripe.checkout.sessions.create({
			metadata: {
				cart: cart.id,
			},
			line_items: cart.orderItems
				.map((item) =>
					item.product
						? {
								price_data: {
									currency: "usd",
									product_data: {
										name: item.product.name,
									},
									unit_amount: item.product.price * 100,
								},
								quantity: item.quantity,
						  }
						: null,
				)
				.filter(Boolean) as Stripe.Checkout.SessionCreateParams.LineItem[],
			mode: "payment",
			success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `http://localhost:3000/cart/canceled`,
		});

		if (session.url) {
			cookies().set("cartId", "");
			redirect(session.url);
		}
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
			<form action={handleStripePaymentAction}>
				<button type="submit" className="rounded-md bg-slate-700 px-4 py-2 text-white">
					Pay
				</button>
			</form>
		</section>
	);
}
