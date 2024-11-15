import React from "react";

function CheckoutPage({ checkoutValue }) {
  return (
    <div className="checkout mt-0 px-2 pt-2 rounded-md">
      <h2 className="text-xl font-bold">Checkout</h2>
      <div className="flex justify-between items-center">
        <p
          className="mt-2 font-semibold"
          style={{
            color: "#ff7086",
          }}
        >
          Free Delivery
        </p>
        <p className="mt-2 font-bold">Total: {checkoutValue}</p>
      </div>
      <button
        className="mt-4 p-3 w-full rounded-lg text-white"
        style={{
          backgroundColor: "#ff7086",
        }}
      >
        + Add to Cart
      </button>
      <div className="p-0 mt-2 text-right text-gray-500">
        @ Powered by Pumper
      </div>
    </div>
  );
}

export default CheckoutPage;
