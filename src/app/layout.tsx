import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/ui/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "E-commerce next13master",
	description: "E-commerce next13master",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={`${inter.className} flex min-h-screen flex-col`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
