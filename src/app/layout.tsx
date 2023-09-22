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
			<body className={`${inter.className}  flex min-h-screen min-w-min flex-col items-center `}>
				<div className="min-w-7xl flex min-h-screen w-8/12 flex-col">
					<Header />
					<div className="flex flex-grow flex-col">{children}</div>
					<footer className="mb-2 flex flex-1 items-end justify-center text-sm text-slate-400">
						@ 2023
					</footer>
				</div>
			</body>
		</html>
	);
}
