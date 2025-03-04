import { useDispatch, useSelector } from "react-redux";
import star from "../assets/star.svg";
import halfStar from "../assets/star-half.svg";
import { addItemToCart } from "../store/slices/cartSlice";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../store/slices/wishListSlice";

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const wishListItems = useSelector((state) => state.wishList);

  return (
    <>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="product flex flex-col gap-3 p-3 rounded-xl bg-zinc-700 "
          >
            <div className="image w-full bg-zinc-50 rounded-md relative">
              <div
                className="w-4 h-4 rounded-full absolute top-2 right-3 bg-purple-600 flex justify-center items-center py-3 px-3 cursor-pointer "
                onClick={() => {
                  wishListItems.find((item) => item === product.id)
                    ? dispatch(removeItemFromWishlist(product.id))
                    : dispatch(addItemToWishlist(product.id));
                }}
              >
                {wishListItems.find((item) => item === product.id)
                  ? "❤️"
                  : "🤍"}
              </div>
              <img
                className="h-48 w-full object-contain"
                src={product.image}
                alt="product"
              />
            </div>
            <div className="info flex flex-col flex-1">
              <h1 className="name text-lg text-white font-semibold line-clamp-1">
                {product.title}
              </h1>
              <p className="text-sm font-extralight description text-zinc-300 line-clamp-3">
                {product.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
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
                <h1 className="price text-xl font-semibold text-purple-400">
                  {product.price}$
                </h1>
              </div>
              <button
                className={`bg-blue-500 hover:bg-blue-700 px-3 py-2 text-sm rounded-lg w-fit`}
                onClick={() => dispatch(addItemToCart(product))}
              >
                Add Product
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
