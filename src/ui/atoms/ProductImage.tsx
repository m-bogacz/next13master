import NextImage from "next/image";
type SingleProductItemImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	classNameContainer?: string;
	className?: string;
};

export const ProductImage = ({
	src,
	alt,
	width = 256,
	height = 256,
	classNameContainer = "overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100 ",
	className = "h-full w-full object-cover object-center p-4 transition-transform hover:scale-105",
}: SingleProductItemImageProps) => {
	return (
		<div className={classNameContainer}>
			<NextImage priority src={src} alt={alt} width={width} height={height} className={className} />
		</div>
	);
};
