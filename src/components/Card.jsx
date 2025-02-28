import { useSelector } from "react-redux";


const Card = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="product flex flex-col gap-3 p-3 rounded-xl bg-zinc-700 "
          >
            <div className="image w-full bg-zinc-50 rounded-md ">
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
              <h1 className="price text-xl font-semibold text-purple-400">
                Rs {product.price}
              </h1>
              <button
                className={`bg-blue-500 hover:bg-blue-700 px-3 py-2 text-sm rounded-lg w-fit`}
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
