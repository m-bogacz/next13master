import { FilterProducts } from "@/ui/molecules/FilterProducts";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div>
				<FilterProducts />
			</div>

			{children}
		</>
	);
}
