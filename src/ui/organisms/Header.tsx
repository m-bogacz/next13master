import "server-only";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Cart } from "../molecules/Cart";
import { Navigation } from "@/ui/molecules/Navigation";
import { SearchInput } from "@/ui/molecules/SearchInput";

export const Header = () => {
	return (
		<header className="m-3 mb-5 flex flex-col items-center justify-between  md:flex-row md:justify-around">
			<Navigation />
			<SearchInput />
			<Cart />
			<div>
				<SignedIn>
					<UserButton userProfileMode="navigation" />
				</SignedIn>
				<SignedOut>
					<SignInButton />
				</SignedOut>
			</div>
		</header>
	);
};
