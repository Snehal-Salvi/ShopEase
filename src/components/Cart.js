import React from "react";
import { useSelector } from "react-redux"; // Hook to access the Redux store state
import { CartTable } from "../features/cart/CartTable"; // Component to display the cart items table
import { HiOutlineShoppingCart } from "react-icons/hi"; // Shopping cart icon

// Component to display the cart page
const Cart = () => {
  // Get the list of cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-4"> {/* Padding around the content */}
      {cartItems.length === 0 ? ( // Check if the cart is empty
        <div className="flex justify-center items-center h-screen"> {/* Center content vertically and horizontally */}
          <div className="bg-white rounded shadow p-6 flex items-center"> {/* Empty cart message container */}
            <HiOutlineShoppingCart className="text-4xl text-gray-400 mr-4" /> {/* Cart icon */}
            <p className="text-center text-xl">Your cart is empty.</p> {/* Empty cart message */}
          </div>
        </div>
      ) : (
        <CartTable /> // Display the CartTable component if there are items in the cart
      )}
    </div>
  );
};

export default Cart;
