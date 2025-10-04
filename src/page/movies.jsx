import Logo from "../component/logo";
import Search from "../component/search";

function Movies({ value, onChange, onSubmit, children }) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col">
      <div className="w-full h-28 md:w-full md:h-32 flex justify-center items-center mx-auto mt-3 md:mt-10 overflow-hidden">
        <Logo smallSize={40} />
      </div>
      <div className="w-full sticky top-0 z-10 bg-[#121a49] py-5">
        <Search value={value} onChange={onChange} onSubmit={onSubmit} />
      </div>
      {children}
    </div>
  );
}

export default Movies;
