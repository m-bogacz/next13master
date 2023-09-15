import { type ProductItemType } from "@/ui/types";

export interface ProductResponseEntity {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
}

export const fetchProductList = async () => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products?take=4`);
	const data = (await response.json()) as ProductResponseEntity[];
	return data.map(mappedProductToProductItemTypes);
};

export const fetchProductsCount = async () => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const data = (await response.json()) as ProductResponseEntity[];

	return data.length;
};
export const fetchProductById = async (id: string) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const data = (await response.json()) as ProductResponseEntity;

	return mappedProductToProductItemTypes(data);
};

export const fetchProductsPerPage = async (page: string, count = 4) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${count}&offset=${page}`,
	);
	const data = (await response.json()) as ProductResponseEntity[];
	const result = data.map(mappedProductToProductItemTypes);

	console.log(result.length);
	return result;
};

const mappedProductToProductItemTypes = (product: ProductResponseEntity): ProductItemType => {
	return {
		productId: product.id,
		name: product.title,
		price: product.price,
		description: product.description,
		category: product.category,
		coverImage: {
			alt: product.title,
			src: product.image,
		},
	};
};
