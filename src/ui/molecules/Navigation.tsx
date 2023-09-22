import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

// type NavLink = {
// 	href: Route<string>;
// 	label: string;
// 	exact: boolean;
// 	subPages?: {
// 		href: string;
// 		label: string;
// 	}[];
// };
// const subPagesCollections = [
// 	{ href: "/collections/new-in", label: "New In" },
// 	{ href: "/collections/throwback", label: "Throwback" },
// ];

// const subPagesCategories = [
// 	{ href: "/categories/t-shirts/1", exact: true, label: "T-Shirts" },
// 	{ href: "/categories/hoodies/1", exact: true, label: "Hoodies" },
// 	{ href: "/categories/accessories/1", exact: true, label: "Accessories" },
// ];

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/products", exact: true, label: "All" },
	{ href: "/categories/t-shirts/1", exact: false, label: "T-Shirts" },
	{ href: "/categories/hoodies/1", exact: false, label: "Hoodies" },
	{ href: "/categories/accessories/1", exact: false, label: "Accessories" },
];

export const Navigation = () => {
	return (
		<nav className="p-6">
			<ul
				role="navigation"
				aria-label="navigation"
				className="flex min-w-max items-center justify-center gap-2"
			>
				{navLinks.map(({ href, label, exact }) => {
					return (
						<li key={href} aria-current="page">
							<ActiveLink exact={exact} href={href as Route}>
								{label}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
