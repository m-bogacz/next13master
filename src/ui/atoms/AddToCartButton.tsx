"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();
	return (
		<button
			disabled={formStatus.pending}
			type="submit"
			className="w-full rounded-md bg-slate-700 p-2 text-center text-2xl font-bold  text-white disabled:cursor-wait disabled:bg-slate-200"
		>
			Add to cart
		</button>
	);
};
