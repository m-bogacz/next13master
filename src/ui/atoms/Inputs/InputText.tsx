interface InputTextProps {
	name: string;
	id?: string;
	placeholder: string;
	type?: string;
}

export const InputText = ({ name, placeholder, type = "text", id = name }: InputTextProps) => {
	return (
		<label htmlFor={id} className="block text-sm font-medium text-gray-700">
			<span className="text-sm text-slate-500">{placeholder}</span>
			<input
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
			/>
		</label>
	);
};
