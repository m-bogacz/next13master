import { Star } from "../atoms/Star";

export const RatingList = ({ rating, read = false }: { rating: number; read?: boolean }) => {
	const stars = Array.from({ length: 5 }, (_, i) => i + 1);

	return (
		<div className="flex">
			{stars.map((_, index) => {
				return <Star key={index} read={read} selected={rating >= index + 1} />;
			})}
		</div>
	);
};
