export const ProductListItemCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="h-32 w-32 overflow-hidden md:h-48 md:w-48">
			<img
				src={src}
				alt={alt}
				className="h-full w-full transform rounded transition duration-1000 hover:scale-125"
			/>
		</div>
	);
};
