import NextImage from "next/image";

export const ProductListItemCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="h-52 w-52 rounded-md">
			<NextImage
				src={src}
				alt={alt}
				width={100}
				height={100}
				className="h-full w-full transform rounded transition-transform hover:scale-105"
			/>
		</div>
	);
};
