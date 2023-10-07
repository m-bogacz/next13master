import { executeGraphql } from "@/api/executeGraphql";
import {
	AddReviewDocument,
	ProductUpdateAvargeRatingDocument,
	ReviewGetProductAvargeRatingDocument,
	ReviewsGetProductByIdDocument,
} from "@/gql/graphql";

export const getReviewsByProductId = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewsGetProductByIdDocument,
		variables: { productId: id },

		next: {
			// revalidate: 30,
			tags: ["review"],
		},
	});

	return graphqlResponse;
};

export const updateProductAvarageRating = async (id: string, averageRating: number) => {
	const graphqlResponse = await executeGraphql({
		query: ProductUpdateAvargeRatingDocument,
		variables: { id, averageRating },
		type: "mutation",
	});

	return graphqlResponse.updateProduct?.averageRating;
};

export const getReviewProductsAvargeRating = async (productId: string) => {
	const avargeRatings = await executeGraphql({
		query: ReviewGetProductAvargeRatingDocument,
		variables: { productId },
	});

	const sum = avargeRatings.reviews.reduce((a, b) => a + b.rating, 0);

	return Math.round(sum / avargeRatings.reviews.length);
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
	await executeGraphql({
		query: AddReviewDocument,
		variables: { productId, headline, name, email, rating, content },
		type: "mutation",
	});
};
