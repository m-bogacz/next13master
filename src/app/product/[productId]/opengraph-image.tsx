/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { getProductById } from "@/api/getProductsList";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
	width: 1200,
	height: 630,
};

export const alt = "Open Graph Image";

// eslint-disable-next-line import/no-default-export
export default async function OpenGraphImage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return new ImageResponse(
		(
			<div
				style={{
					backgroundColor: "white",
					backgroundSize: "150px 150px",
					height: "100%",
					width: "100%",
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					flexWrap: "nowrap",
				}}
			>
				<div
					style={{
						fontSize: 60,
						fontStyle: "normal",
						letterSpacing: "-0.025em",
						color: "gray",
						marginTop: 30,
						padding: "0 120px",
						lineHeight: 1.4,
						whiteSpace: "pre-wrap",
					}}
				>
					{product.name}
				</div>
				{product.images[0] ? (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							justifyItems: "center",
						}}
					>
						<img
							alt={product.name}
							height={200}
							src={product.images[0].url}
							style={{ margin: "0 30px" }}
							width={232}
						/>
					</div>
				) : null}
				<div
					style={{
						fontSize: 40,
						fontStyle: "normal",
						letterSpacing: "-0.025em",
						color: "grey",
						marginTop: 30,
						padding: "0 120px",
						lineHeight: 1.4,
						whiteSpace: "pre-wrap",
					}}
				>
					{product.description}
				</div>
				{product.categories[0] ? (
					<div
						style={{
							fontSize: 20,
							fontStyle: "normal",
							letterSpacing: "-0.025em",
							color: "grey",
							marginTop: 30,
							padding: "0 120px",
							lineHeight: 1.4,
							whiteSpace: "pre-wrap",
						}}
					>
						{product.categories[0].name}
					</div>
				) : null}
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}
