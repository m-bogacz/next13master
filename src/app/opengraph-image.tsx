import { ImageResponse } from "next/server";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
	width: 1200,
	height: 630,
};

export const alt = "Open Graph Image";

// eslint-disable-next-line import/no-default-export
export default function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					backgroundColor: "black",
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
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						justifyItems: "center",
					}}
				></div>
				<div
					style={{
						fontSize: 60,
						fontStyle: "normal",
						letterSpacing: "-0.025em",
						color: "white",
						marginTop: 30,
						padding: "0 120px",
						lineHeight: 1.4,
						whiteSpace: "pre-wrap",
					}}
				>
					{"E commerce next13"}
				</div>
			</div>
		),
	);
}
