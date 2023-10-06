import clsx from "clsx";

interface PropsStar {
	selected: boolean;
	handleRatingChange: () => void;
	index: number;
	rating: number;
	name: string;
}

export const InputStar = ({ index, handleRatingChange, rating, selected, name }: PropsStar) => {
	return (
		<>
			<input
				type="radio"
				id={`star-${index}`}
				name={name}
				value={index}
				checked={selected}
				onChange={handleRatingChange}
				className="sr-only"
				aria-checked={rating === index}
				aria-label={`Rate ${index} out of 5`}
			/>
			<label
				htmlFor={`star-${index}`}
				className={clsx(
					"cursor-pointer list-none bg-white text-xl text-gray-400 transition-colors hover:text-yellow-500",
					selected && "text-yellow-500",
				)}
			>
				★
			</label>
		</>
	);
};
