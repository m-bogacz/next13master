import "server-only";
import { Cart } from "../molecules/Cart";
import { Navigation } from "@/ui/molecules/Navigation";
import { SearchInput } from "@/ui/molecules/SearchInput";

export const Header = () => {
	return (
		<header className="m-3 mb-5 flex flex-col items-center justify-between  md:flex-row md:justify-around">
			<Navigation />
			<SearchInput />
			<Cart />
		</header>
	);
};
