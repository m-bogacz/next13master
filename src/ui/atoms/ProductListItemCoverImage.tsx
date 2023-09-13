export const ProductListItemCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="h-64 w-full rounded-md">
			<img
				src={src}
				alt={alt}
				className="h-full w-full transform rounded transition-transform hover:scale-105"
			/>
		</div>
	);
};
