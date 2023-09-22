import NextImage from "next/image";
type SingleProductItemImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export const ProductImage = ({
	src,
	alt,
	width = 256,
	height = 256,
}: SingleProductItemImageProps) => {
	return (
		<div className="overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<NextImage
				priority
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
