import clsx from "clsx";

export const Star = ({ selected, read = false }: { selected: boolean; read?: boolean }) => {
	return (
		<li
			className={clsx(
				"cursor-pointer list-none bg-white text-xl text-gray-400",
				read && "cursor-none transition-colors hover:text-yellow-500",
				selected && "text-yellow-500",
			)}
		>
			★
		</li>
	);
};
