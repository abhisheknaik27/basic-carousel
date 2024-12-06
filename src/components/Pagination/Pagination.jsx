import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      if (data && data.products) {
        setProducts(data.products);
      }
    };
    fetchProducts();
  }, []);
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <div>
      {products.length > 0 &&
        products.slice(page * 10 - 10, page * 10).map((prod) => (
          <div
            key={prod.id}
            className="bg-gray-300 p-[20px] border rounded-md m-[20px ]"
          >
            <img
              src={prod.thumbnail}
              alt={prod.title}
              className="cursor-pointer"
            />
            <h1>Name: {prod.title}</h1>
            <h1>Description: {prod.description}</h1>
            <h1>Category: {prod.category}</h1>
          </div>
        ))}
      {console.log(products)}
      {products.length > 0 && (
        <div className="flex justify-center ">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={` ${
              page > 1 ? "" : "opacity-0"
            } py-[15px] px-[20px] border border-gray-200 cursor-pointer`}
          >
            ⬅️
          </span>
          {[...Array(products.length / 10)].map((_, idx) => {
            return (
              <span
                onClick={() => selectPageHandler(idx + 1)}
                className={`${
                  page == idx + 1 ? "bg-green-300" : ""
                }  py-[15px] px-[20px] border border-gray-200 cursor-pointer`}
                key={idx}
              >
                {idx + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={` ${
              page < products.length / 10 ? "" : "opacity-0"
            } py-[15px] px-[20px] border border-gray-200 cursor-pointer`}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
