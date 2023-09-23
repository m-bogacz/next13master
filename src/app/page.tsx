import { ArrowRight } from "lucide-react";
import { getProductsCountList } from "@/api/getProductsList";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProductsCountList();

	return (
		<main className="flex flex-col items-center">
			<ProductList products={products} />
			<ActiveLink
				href="/products"
				className="flex-3 flex w-64 justify-center rounded-md border border-slate-300 p-1 align-baseline text-sm text-gray-500   hover:text-gray-700"
			>
				See more <ArrowRight size={"1.2rem"} />
			</ActiveLink>
		</main>
	);
}
