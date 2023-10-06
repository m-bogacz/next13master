import { InputText } from "@/ui/atoms/Inputs/InputText";
import { Rating } from "@/ui/organisms/Rating";

export const AddReviewForm = ({ id }: { id: string }) => {
	console.log(id);
	return (
		<>
			<article className="mb-5 max-w-xs">
				<header className="flex flex-col">
					<h3 className="text-2xl font-medium text-slate-700">Share your thoughts</h3>
					<span className="text-lg text-slate-700">
						If you’ve used this product, share your thoughts with other customers
					</span>
				</header>
				<form className="flex flex-col gap-4" data-testid="add-review-form">
					<InputText name="review-title" placeholder="Review title" />
					<InputText name="review-content" placeholder="Review content" />
					<Rating name="rating" />
					<InputText name="name" placeholder="Name" />
					<InputText name="email" placeholder="E-mail" type="email" />
					<button
						type="submit"
						className="rounded-md bg-slate-700 px-4 py-2 text-lg font-medium text-white hover:bg-slate-800"
					>
						submit
					</button>
				</form>
			</article>
		</>
	);
};
