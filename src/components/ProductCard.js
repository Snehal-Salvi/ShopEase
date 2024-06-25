import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { HiOutlineShoppingCart } from "react-icons/hi";

const ProductCard = ({ image, name, price, description, id }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price }));
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transition transform hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-contain" src={image} alt={name} />
      <div className="p-6">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-blue-800 text-lg">$ {price.toFixed(2)}</p>
        <p className="text-gray-700 text-sm mt-2">{description}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center mt-4"
        >
          Add to Cart <HiOutlineShoppingCart className="ml-2 h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
