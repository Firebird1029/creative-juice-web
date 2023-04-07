const InputField = ({ htmlFor, id, placeholder, heading }) => {
	return (
		<label
			htmlFor={htmlFor}
			className="block mb-2 text-sm font-medium text-gray-900"
		>
			<span className="mb-1 inline-block">{heading}</span>

			<input
				type="password"
				id={id}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder={placeholder}
				required
			/>
		</label>
	)
}

export default InputField
