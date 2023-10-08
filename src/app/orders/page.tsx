import { currentUser } from "@clerk/nextjs";
import { getOrdersByEmail } from "@/api/cartApi";

export default async function OrdersPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress;

	if (!email) {
		return <div>Not logged in</div>;
	}
	const orders = await getOrdersByEmail(email);
	return (
		<div>
			<pre>{JSON.stringify(orders, null, 2)}</pre>
		</div>
	);
}
