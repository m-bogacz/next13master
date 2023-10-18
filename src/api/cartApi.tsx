import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { currentUser } from "@clerk/nextjs";
import { executeGraphql } from "@/api/executeGraphql";
import {
	type CartFragment,
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartUpsertOrderItemDocument,
	OrdersGetByEmailDocument,
} from "@/gql/graphql";

export async function getOrCreateCart(): Promise<CartFragment> {
	const cart = await getCart();
	if (cart) {
		return cart;
	}
	const { createOrder: newCart } = await createCart();

	if (!newCart) {
		throw new Error("Cart not created");
	}
	cookies().set("cartId", newCart.id);
	return newCart;
}

export async function getCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphql({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			next: {
				tags: ["cart"],
			},
			cache: "no-store",
		});
		if (!cart.order) {
			return;
		}
		return cart.order;
	}
}
export async function createCart() {
	const user = await currentUser();
	// if (!user?.emailAddresses[0]?.emailAddress) {
	// 	throw new Error("User not found");
	// }

	return executeGraphql({
		query: CartCreateDocument,
		variables: {
			email: user?.emailAddresses[0]?.emailAddress || "test@test.pl",
			stripeCheckoutId: "",
			total: 1,
		},
		type: "mutation",
	});
}

export async function addProductToCart(orderId: string, productId: string) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
	});

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	const checkIfProductIsInCart = await getCart();

	const orderItemExist = checkIfProductIsInCart?.orderItems.find(
		(item) => item.product?.id === productId,
	);

	await executeGraphql({
		query: CartUpsertOrderItemDocument,
		variables: {
			orderId,
			productId,
			quantity: orderItemExist ? orderItemExist.quantity + 1 : 1,
			orderItemId: orderItemExist?.id,
		},
		type: "mutation",
	});

	revalidateTag("cart");
}

export const getOrdersByEmail = async (email: string) => {
	const { orders } = await executeGraphql({
		query: OrdersGetByEmailDocument,
		variables: { email },
		next: {
			tags: ["orders"],
		},
		cache: "no-store",
	});

	return orders;
};
