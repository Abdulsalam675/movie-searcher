function PopCorn() {
  return (
    <div className="w-full flex-1 flex flex-col items-center pt-24 mx-auto">
      <div className="w-32 h-32 overflow-hidden">
        <img
          src="/popcorn-soda.png"
          alt="popcorn & soda"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-white text-lg font-bold">MOVIE APP</p>
    </div>
  );
}

export default PopCorn;
