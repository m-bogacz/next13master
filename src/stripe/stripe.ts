import Stripe from "stripe";

export const getStripeInstance = () => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("No Stripe secret key");
	}

	return new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});
};
