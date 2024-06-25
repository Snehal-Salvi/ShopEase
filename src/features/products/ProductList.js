// ProductList.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "./productSlice";
import Loader from "../../components/Loader";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    // Attempt to fetch products only when status is idle (initial state)
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  // Attempt to load products from local storage if API fetch fails and no products are loaded
  if (status === "failed" && products.length === 0) {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    if (storedProducts.length > 0) {
      return (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {storedProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                id={product.id}
              />
            ))}
          </div>
        </div>
      );
    } else {
      // No products available in local storage
      return (
        <div className="flex justify-center items-center h-screen">
          <p>No products available. Please check your internet connection.</p>
        </div>
      );
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
