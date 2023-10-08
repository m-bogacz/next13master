import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/ui/organisms/Header";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "E-commerce next13master",
	description: "E-commerce next13master",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="pl">
				<body className={`${inter.className}  flex min-h-screen min-w-min flex-col items-center `}>
					<div className="min-w-7xl flex min-h-screen w-8/12 flex-col">
						<Header />
						<div className="flex flex-grow flex-col">{children}</div>
						<footer className="mb-2 flex flex-1 flex-col items-center justify-end text-sm text-slate-400">
							<span>@ 2023</span>
							<section className="flex  gap-3">
								<ActiveLink className="w-full hover:text-slate-500" href="/polityka-prywatnosci">
									Polityka prywatności
								</ActiveLink>
								<ActiveLink className="hover:text-slate-500 " href="/regulamin">
									Regulamin
								</ActiveLink>
							</section>
						</footer>
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
