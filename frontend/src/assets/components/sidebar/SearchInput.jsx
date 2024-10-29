import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
	return (
        
		<form
			className="flex items-center gap-2 bg-gray-800 p-2 rounded-full shadow-md"
			style={{ width: '100%', maxWidth: '300px' }}
		>
			<input
				type="text"
				placeholder="Search…"
             className="bg-transparent placeholder-gray-400 text-white outline-none w-full px-4"
			/>
			<button
				type="submit"
				className="btn btn-circle bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center"
			>
				<IoSearchSharp className="w-6 h-6" />
			</button>
		</form>
	);
};

export default SearchInput;
