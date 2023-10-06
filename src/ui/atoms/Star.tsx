import clsx from "clsx";

export const Star = ({ selected }: { selected: boolean }) => {
	return (
		<li
			className={clsx(
				"cursor-pointer list-none bg-white text-xl text-gray-400 transition-colors hover:text-yellow-500",
				selected && "text-yellow-500",
			)}
		>
			★
		</li>
	);
};
