"use client";

import { useState } from "react";
import { InputStar } from "../atoms/Inputs/InputStar";

type RatingProps = {
	rating?: number;
	className?: string;
	name: string;
};

export const Rating = ({ className, name }: RatingProps) => {
	const [rating, setRating] = useState(0);
	const stars = Array.from({ length: 5 }, (_, i) => i + 1);

	return (
		<div className={`flex ${className}`}>
			{stars.map((index) => {
				return (
					<InputStar
						name={name}
						key={index}
						selected={index <= rating}
						handleRatingChange={() => setRating(index)}
						index={index}
						rating={rating}
					/>
				);
			})}
		</div>
	);
};
