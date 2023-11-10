"use client";

import React from "react";

export const AddToCartButton = () => {
	return (
		<button
			data-testid="add-to-cart-button"
			type="submit"
			className="w-full rounded-md bg-slate-700 p-2 text-center text-2xl font-bold  text-white disabled:cursor-wait disabled:bg-slate-200"
		>
			Add to cart
		</button>
	);
};
