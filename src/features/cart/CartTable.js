import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Hooks to access Redux store state and dispatch actions
import { clearCart, removeFromCart } from "./cartSlice"; // Redux actions to clear cart and remove item from cart
import { HiOutlineTrash } from "react-icons/hi"; // Trash icon from React Icons library
import { toast } from "react-toastify"; // Toast notification library for displaying messages
import "react-toastify/dist/ReactToastify.css"; // CSS for toast notifications

// Component to display the cart items in a table
export const CartTable = () => {
  const cartItems = useSelector((state) => state.cart.items); // Select cart items from Redux store
  const dispatch = useDispatch(); // Initialize dispatch function to dispatch actions

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (itemId, itemName) => {
    dispatch(removeFromCart(itemId)); // Dispatch removeFromCart action with item ID
    toast.error(`${itemName} removed from cart.`); // Display toast notification for item removal
  };

  // Function to handle clearing the entire cart
  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch clearCart action to remove all items from cart
    toast.error(`Cart cleared.`); // Display toast notification for cart clearing
  };

  return (
    <div>
      <table className="min-w-full bg-white border-gray-200 shadow-md rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${item.price * item.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleRemoveFromCart(item.id, item.name)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded flex items-center"
                >
                  <HiOutlineTrash className="h-5 w-5 mr-1" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {cartItems.length > 0 && ( // Render clear cart button only if there are items in the cart
        <div className="flex justify-end mt-4">
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <HiOutlineTrash className="h-5 w-5 mr-1" />
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};
