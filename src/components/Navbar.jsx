import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cartItems);

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
      </div>
      <button
        className={`bg-purple-500 rounded-md hover:bg-purple-700 px-3 py-1`}
      >
        <Link to="/cart">
          <div className="absolute top-1 right-2 font-bold bg-white text-black p-[0.3px] rounded-full px-[6px] text-sm">
            {items.reduce(
              (totalProductCount, product) =>
                totalProductCount + product.quantity,0
            )}
          </div>
          <img className="w-7" src={cart} alt="" />
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
