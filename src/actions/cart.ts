"use server";

import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/getProductsList";
import { CartChangeOrderItemQuantityDocument, CartRemoveOrderItemDocument } from "@/gql/graphql";

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
