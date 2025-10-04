import { FaSearch } from "react-icons/fa";

function Search({ value, onChange, onSubmit }) {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center px-3">
      <form
        onSubmit={onSubmit}
        className=" max-w-2xl w-full flex items-center justify-center"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search movies"
          className="w-full px-3 h-12 focus:border-amber-400 outline-none rounded-tl-md rounded-bl-md"
        />
        <button className="px-4 md:px-6 h-12 bg-amber-400 rounded-tr-md rounded-br-md">
          <FaSearch size={18} color="white" />
        </button>
      </form>
    </div>
  );
}

export default Search;
