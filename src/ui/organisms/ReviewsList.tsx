"use client";

import { RatingList } from "../molecules/RatingList";

import { type ReviewsProductItemFragment } from "@/gql/graphql";

type ReviewsListProps = {
	reviews: ReviewsProductItemFragment[];
};

export const ReviewsList = ({ reviews }: ReviewsListProps) => {
	const stars = Array.from({ length: 5 }, (_, i) => i + 1);

	return (
		<section className="justify-center">
			{reviews &&
				reviews.map((review) => {
					return (
						<article key={review.id} className="mb-5 max-w-xs text-left">
							<header className="flex flex-col">
								<div>
									<span className="text-lg text-slate-500">name: </span>
									<span className="text-lg text-slate-700">{review.name}</span>
								</div>
								<div>
									<span className="text-lg text-slate-500">title: </span>
									<span className="text-lg text-slate-700">{review.headline}</span>
								</div>
								<div className="flex items-baseline">
									<span>{`${review.rating}/${stars.length}`}</span>
									<span>
										<RatingList rating={review.rating} />
									</span>
								</div>
								<div>
									<span className="text-lg text-slate-500">content: </span>
									<span className="text-lg text-slate-700">{review.content}</span>
								</div>
							</header>
						</article>
					);
				})}
		</section>
	);
};
