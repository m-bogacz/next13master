import { Star } from "../atoms/Star";

export const RatingList = ({ rating }: { rating: number }) => {
	const stars = Array.from({ length: 5 }, (_, i) => i + 1);

	return (
		<ul className="flex">
			{stars.map((_, index) => {
				return <Star key={index} selected={rating >= index + 1} />;
			})}
		</ul>
	);
};
