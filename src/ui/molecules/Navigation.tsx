import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type NavLink = {
	href: Route<string>;
	label: string;
	exact: boolean;
	subLinks?: {
		href: string;
		label: string;
	}[];
};
const subPagesCollections = [
	{ href: "/collections/new-in", label: "New In" },
	{ href: "/collections/throwback", label: "Throwback" },
];

const subPagesCategories = [
	{ href: "/categories/t-shirts/1", exact: true, label: "T-Shirts" },
	{ href: "/categories/hoodies/1", exact: true, label: "Hoodies" },
	{ href: "/categories/accessories/1", exact: true, label: "Accessories" },
];

const navLinks: NavLink[] = [
	{ href: "/", exact: false, label: "Home" },
	{ href: "/products", exact: true, label: "All" },
	{ href: "/categories", subLinks: subPagesCategories, exact: false, label: "Categories" },
	{ href: "/collections", subLinks: subPagesCollections, exact: false, label: "Collections" },
];

export const Navigation = () => {
	return (
		<nav className="p-6">
			<ul
				role="navigation"
				aria-label="navigation"
				className="flex min-w-max items-center justify-center gap-2"
			>
				{navLinks.map(({ href, label, exact, subLinks }) => {
					return (
						<li key={href} aria-current="page" className="hover:group-[]:: group">
							<ActiveLink exact={exact} href={href as Route}>
								{label}
							</ActiveLink>
							{subLinks && (
								<ul className="absolute hidden flex-col group-hover:flex">
									{subLinks.map(({ href, label }) => {
										return (
											<li key={href}>
												<ActiveLink href={href as Route}>{label}</ActiveLink>
											</li>
										);
									})}
								</ul>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
