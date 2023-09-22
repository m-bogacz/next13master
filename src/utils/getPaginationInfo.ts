export const getPaginationInfo = (currentPage: number, productsPerPage = 4) => {
	const skipProduct = currentPage * productsPerPage - productsPerPage;

	return [productsPerPage, skipProduct];
};
