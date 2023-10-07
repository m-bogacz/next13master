"use server";

import { revalidateTag } from "next/cache";

import { CartChangeOrderItemQuantityDocument, CartRemoveOrderItemDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/executeGraphql";

export const changeOrderItemQuantity = async (itemId: string, quantity: number) => {
	return executeGraphql({
		query: CartChangeOrderItemQuantityDocument,
		variables: { itemId, quantity },
	});
	revalidateTag("cart");
};

export const removeOrderItem = async (itemId: string) => {
	await executeGraphql({
		query: CartRemoveOrderItemDocument,
		variables: { itemId },
	});

	revalidateTag("cart");
};
