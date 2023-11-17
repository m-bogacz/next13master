import { redirect } from "next/navigation";
import type Stripe from "stripe";
import { cookies } from "next/headers";

import { ShoppingCartItem } from "@/ui/atoms/ShoppingCartItem";
import { getCart } from "@/api/cartApi";
import { getStripeInstance } from "@/stripe/stripe";

export default async function CartPage() {
	const cart = await getCart();

	if (!cart) {
		redirect("/products");
	}

	async function handleStripePaymentAction() {
		"use server";

		const stripe = getStripeInstance();

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
			<header className="pb-10">
				<h2 className="opacity-9 text-4xl font-bold text-black">Shopping Cart</h2>
			</header>

			<section className="grid grid-cols-1 md:grid-cols-2">
				<ul className="grid grid-cols-1 border-t">
					{cart.orderItems.map((item) => {
						if (!item.product) return null;
						return <ShoppingCartItem key={item.id} {...item} />;
					})}
				</ul>
				<div className="flex w-full flex-col p-5">
					<section className="flex flex-col gap-10 bg-gray-200 p-5">
						<h3 className="text-xl">Order Summary</h3>

						<div className="flex justify-between border-b-cyan-200">
							<span className="text-sm font-medium text-slate-500">SubTotal</span>
							<span>99.99 PLN</span>
						</div>
						<div className="flex justify-between border-b-cyan-200">
							<span className="text-sm font-medium text-slate-500">Total</span>
							<span>4 products</span>
						</div>
						<div className="flex justify-between border-b-cyan-200">
							<span className="text-sm font-medium text-slate-500">Cost delivery</span>
							<span>16.90</span>
						</div>
						<div className="flex justify-between border-b-cyan-200">
							<span className="text-sm font-medium text-slate-500">Order total </span>
							<span>112.32 PLN</span>
						</div>
						<form action={handleStripePaymentAction}>
							<button
								type="submit"
								className="w-full rounded-md bg-slate-700 px-20 py-2 text-center text-white"
							>
								Checkout
							</button>
						</form>
					</section>
				</div>
			</section>
		</section>
	);
}
