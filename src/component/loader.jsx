import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className=" max-w-7xl flex justify-center items-center py-20">
      <ClipLoader size={35} color="white" />
    </div>
  );
}

export default Loader;
