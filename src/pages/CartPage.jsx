import { useDispatch, useSelector } from "react-redux";
import cartLogo from "../assets/Shopping-removebg-preview.png";
import deleteLogoStill from "../assets/delete_Gif._Icon.png";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  emptyCart,
  removeItemFromCart,
} from "../store/slices/cartSlice";
import star from "../assets/star.svg";
import halfStar from "../assets/star-half.svg";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartItems);

  return (
    <div
      className="
             flex flex-col bg-zinc-800 w-full gap-4 p-2 rounded-b-none h-[92.7%] md:shadow-2x  transition-all duration-700 ease-in-out"
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-purple-500">
            Cart Products
          </h1>
          <img className="w-12 h-12" src={cartLogo} alt="" />
        </div>
        <button
          className={`${
            cartProducts.length > 0 ? "block" : "hidden"
          } bg-purple-500  rounded-md hover:bg-purple-700 px-3 py-1`}
          onClick={() => dispatch(emptyCart())}
        >
          Empty Cart
        </button>
      </div>
      <hr />
      <div className="flex flex-col flex-1 gap-3 overflow-auto scrollBar">
        <div
          className={`${
            cartProducts.length > 0 ? "hidden" : "block"
          } m-auto flex  flex-col items-center`}
        >
          <img className="w-44 h-44" src={cartLogo} alt="" />
          <h1 className={`text-xl font-bold `}>Add Products</h1>
        </div>
        {cartProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="product_card flex gap-3 md:gap-6 p-3 items-center bg-zinc-700 rounded-lg "
            >
              <div className="img h-24 w-24 rounded-xl bg-white overflow-hidden">
                <img
                  className="object-contain w-full h-full"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="card_info flex flex-col gap-2 bg-zinc-700  rounded-xl flex-1">
                <h1 className="card_name text-xl line-clamp-1 select-none max-w-40 md:max-w-80">
                  {product.title}
                </h1>
                <div className="flex gap-2">
                  <h1 className="price text-xl font-semibold text-zinc-100">
                    {product.rating.rate}
                  </h1>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: product.rating.rate }).map(
                      (_, index) => (
                        <div key={index}>
                          <img src={star} alt="star" className="w-4 h-4" />
                          {index === product.rating.rate - 1 && (
                            <img
                              src={halfStar}
                              alt="star"
                              className="w-4 h-4"
                            />
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="flex gap-7 items-center">
                  <p className="card_price text-2xl  md:text-2xl text-purple-500 select-none flex gap-2">
                    <span>{product.price}</span>
                    <span>$</span>
                  </p>
                  <div className="add grid grid-flow-col  w-24  text-center  content-center items-center">
                    <button
                      className=" bg-purple-500 rounded-md hover:bg-purple-700 "
                      onClick={() => {
                        product.quantity === 1
                          ? dispatch(removeItemFromCart({ id: product.id }))
                          : dispatch(decreaseItemQuantity({ id: product.id }));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M5 11V13H19V11H5Z"></path>
                      </svg>
                    </button>
                    <h1 className="select-none">{product.quantity}</h1>
                    <button
                      className=" bg-purple-500 rounded-md hover:bg-purple-700"
                      onClick={() =>
                        dispatch(increaseItemQuantity({ id: product.id }))
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <button
                  className="bg-purple-500 rounded-md hover:bg-purple-700 flex items-center"
                  onClick={() => dispatch(removeItemFromCart(product.id))}
                >
                  <img
                    className="h-12 w-12"
                    src={deleteLogoStill}
                    alt="Delete Animation"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`
                      ${
                        cartProducts.length > 0
                          ? "justify-between"
                          : "justify-end"
                      } flex j border-t pt-2 items-center`}
      >
        <button
          className={`${
            cartProducts.length > 0 ? "block" : "hidden"
          } bg-purple-500  rounded-md hover:bg-purple-700 px-3 py-2`}
        >
          Checkout
        </button>
        <div
          className={`${
            cartProducts.length > 0 ? "flex" : "hidden"
          } gap-2 items-center`}
        >
          <h1 className="text-2xl font-semibold py-1">Total Price : </h1>

          <h1 className="text-2xl font-semibold text-purple-400 ">
            {cartProducts
              .reduce(
                (TotalPrice, currentItem) =>
                  TotalPrice + currentItem.price * currentItem.quantity,
                0
              )
              .toFixed()}{" "}
            $
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
