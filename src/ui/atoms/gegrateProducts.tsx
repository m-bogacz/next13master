"use client";
import { faker } from "@faker-js/faker";

export const GenerateProducts = () => {
	function createRandomProduct() {
		const colors = [
			"czarny",
			"biały",
			"niebieski",
			"czerwony",
			"zielony",
			"szary",
			"różowy",
			"żółty",
		];

		const name = faker.commerce.productName();
		const description = faker.commerce.productDescription();
		const category = faker.commerce.productMaterial();
		const image = faker.image.urlLoremFlickr({ category: "fashion" });
		const price = faker.commerce.price();
		const currency = faker.finance.currencyCode();
		const brand = faker.commerce.productMaterial();
		const color = colors[Math.floor(Math.random() * colors.length)];

		const size = faker.commerce.productMaterial();
		const quantity = faker.number.int();

		const obj = {
			id: faker.string.uuid(),
			name,
			description,
			image,
			price,
			brand,
			color,
			size,
			quantity,
			category,
			currency,
		};

		return obj;
	}

	return <button onClick={createRandomProduct}>random product</button>;
};
