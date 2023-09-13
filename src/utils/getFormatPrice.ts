export const getFormatPrice = (price: number) => {
	return new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(price);
};
