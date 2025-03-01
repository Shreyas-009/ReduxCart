import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex p-2 bg-zinc-600 z-50 w-full justify-between">
      <div className=" flex gap-7">
        <button
          className={`bg-purple-500 rounded-md hover:bg-purple-700 px-3 py-1`}
        >
          <Link to="/">Home</Link>
        </button>
        <button
          className={`bg-purple-500 rounded-md hover:bg-purple-700 px-3 py-1`}
        >
          <Link to="/products">Products</Link>
        </button>
        <button
          className={`bg-purple-500 rounded-md hover:bg-purple-700 px-3 py-1`}
        >
          <Link to="/cart">Cart</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
