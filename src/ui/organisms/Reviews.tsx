import { Suspense } from "react";
import { AddReviewForm } from "../molecules/AddReviewForm";
import { getReviewsByProductId } from "@/api/getReviewsList";

type ReviewsProps = {
	readonly id: string;
};

export const Reviews = async ({ id }: ReviewsProps) => {
	const { reviews } = await getReviewsByProductId(id);

	return (
		<Suspense fallback="loading...">
			<AddReviewForm reviews={reviews} id={id} />;
		</Suspense>
	);
};
