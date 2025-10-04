function Logo({ smallSize, largeSize }) {
  return (
    <img
      src="/goggle.png"
      alt="logo"
      className={`w-${smallSize} h-${smallSize} md:w-${largeSize} md:${largeSize} object-cover`}
    />
  );
}
export default Logo;
