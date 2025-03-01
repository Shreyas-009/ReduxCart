import Card from "../components/Card";

const Products = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full p-0 md:p-4 gap-5 h-[93%] relative">
        <div className="productList grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-zinc-800 w-full rounded-xl gap-3 p-2 overflow-y-scroll scrollBar">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Products;
