"use server";

import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/getProductsList";
import {
	AddReviewDocument,
	CartChangeOrderItemQuantityDocument,
	CartRemoveOrderItemDocument,
} from "@/gql/graphql";

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

type AddReviewResult = {
	productId: string;
	headline: string;
	name: string;
	email: string;
	content: string;
	rating: number;
};

export const addReview = async ({
	productId,
	headline,
	name,
	email,
	content,
	rating,
}: AddReviewResult) => {
	const result = await executeGraphql({
		query: AddReviewDocument,
		variables: { productId, headline, name, email, rating, content },
	});

	return result;
};
