import { type UrlObject } from "url";
import { type Route } from "next";

export type ProductItemType = {
	name: string;
	productId: string;
	price: number;
	description: string;
	category: string;
	coverImage: {
		alt: string;
		src: string;
	};
};

export interface UrlObjectWithNextRoute<T extends string> extends UrlObject {
	pathname: Route<T>;
}
