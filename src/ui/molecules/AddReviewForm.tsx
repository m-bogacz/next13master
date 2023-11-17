"use client";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Suspense, useOptimistic } from "react";

import { InputText } from "../atoms/Inputs/InputText";

import { Rating } from "../organisms/Rating";
import { ReviewsList } from "./ReviewsList";
// import { type ReviewsProductItemFragment } from "@/gql/graphql";
import { addReview } from "@/api/getReviewsList";
import { type ReviewsProductItemFragment } from "@/gql/graphql";

type ReviewsProps = {
	reviews: {
		name: string;
		headline: string;
		rating: number;
		content: string;
		id: string;
	}[];
	id: string;
};

export const AddReviewForm = ({ reviews, id }: ReviewsProps) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(_state, newReview: ReviewsProductItemFragment) => [..._state, newReview],
	);

	return (
		<article className="col-auto grid w-full grid-cols-2">
			<>
				<article className="mb-5 max-w-xs">
					<header className="flex flex-col">
						<h3 className="text-2xl font-medium text-slate-700">Share your thoughts</h3>
						<span className="text-lg text-slate-700">
							If you’ve used this product, share your thoughts with other customers
						</span>
					</header>
					<form className="flex flex-col gap-4" data-testid="add-review-form">
						<InputText name="headline" placeholder="Review title" />
						<InputText name="content" placeholder="Review content" />
						<Rating name="rating" />
						<InputText name="name" placeholder="Name" />
						<InputText name="email" placeholder="E-mail" type="email" />
						<button
							formAction={async (formData) => {
								const obj = {
									headline: formData.get("headline") as string,
									content: formData.get("content") as string,
									rating: Number(formData.get("rating")),
									name: formData.get("name") as string,
									email: formData.get("email") as string,
								};

								setOptimisticReviews({ ...obj, id });
								await addReview({ ...obj, productId: id });
							}}
							type="submit"
							className="rounded-md bg-slate-700 px-4 py-2 text-lg font-medium text-white hover:bg-slate-800"
						>
							submit
						</button>
					</form>
				</article>
			</>
			<Suspense fallback="loading...">
				<ReviewsList reviews={optimisticReviews} />
			</Suspense>
		</article>
	);
};
