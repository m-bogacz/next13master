export const ProductListItemDescription = ({
	name,
	description,
}: {
	name: string;
	description: string;
}) => {
	return (
		<div className="flex flex-col justify-between">
			<h3 className="text-lg font-semibold text-gray-900">{name}</h3>
			<p className="text-sm text-gray-500">{description}</p>
		</div>
	);
};
