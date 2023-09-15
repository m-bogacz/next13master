import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav className="flex flex-wrap items-center justify-between p-6">
			<ul
				role="navigation"
				aria-label="navigation"
				className="mt-4 flex min-w-full items-center justify-start gap-2"
			>
				<li>
					<ActiveLink href="/">Home</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/products">All</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
