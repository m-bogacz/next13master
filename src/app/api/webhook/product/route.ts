import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest } from "next/server";
import { getReviewProductsAvargeRating, updateProductAvarageRating } from "@/api/getReviewsList";

export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();

	if (
		typeof body === "object" &&
		body &&
		"productId" in body &&
		typeof body.productId === "string"
	) {
		const id = body.productId;
		const avargeRating = await getReviewProductsAvargeRating(id);

		await updateProductAvarageRating(id, avargeRating);

		revalidatePath(`/product/${id}`);

		revalidatePath(`/products`);
		revalidateTag("review");
		revalidateTag("product");
		return new Response(null, { status: 204 });
	} else {
		return new Response(null, { status: 400 });
	}
}
