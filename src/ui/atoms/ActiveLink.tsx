"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import { type UrlObjectWithNextRoute } from "@/ui/types";
import { getExtractPathname } from "@/utils/extractPathname";

interface ActiveLinkProps<T extends string> {
	href: Route<T> | UrlObjectWithNextRoute<T>;
	children: React.ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
}

export const ActiveLink = <T extends string>({
	href,
	children,
	className = "text-sm text-gray-500 hover:text-gray-700",
	activeClassName = "text-gray-800 border border-b-orange-600",
	exact = false,
}: ActiveLinkProps<T>) => {
	const currentPathname = usePathname();
	const pathname = getExtractPathname(href);

	const slicePathname = currentPathname.slice(0, pathname.length);
	const isActive = exact ? slicePathname === pathname : currentPathname === pathname;

	return (
		<Link href={href} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};
