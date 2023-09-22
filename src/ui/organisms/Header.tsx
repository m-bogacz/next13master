import { ShoppingCart } from "lucide-react";
import { Navigation } from "@/ui/molecules/Navigation";
import { SearchInput } from "@/ui/molecules/SearchInput";

export const Header = () => {
	return (
		<header className="m-3 mb-5 flex flex-col items-center justify-between  md:flex-row md:justify-around">
			<Navigation />
			<SearchInput />
			<div className="mt-5 flex  flex-initial items-end justify-end md:ml-5 md:mt-0">
				<ShoppingCart className="text-slate-600" />
			</div>
		</header>
	);
};
