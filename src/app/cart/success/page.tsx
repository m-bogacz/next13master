import { getStripeInstance } from "@/stripe/stripe";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { session_id: string };
}) {
	const stripe = getStripeInstance();

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.session_id);

	return <div>{stripeCheckoutSession.payment_status}</div>;
}
