import React, { useState } from "react";
import CheckoutPage from "../CheckoutPage/CheckoutPage";

function ProductPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkoutValue, setCheckoutValue] = useState(""); // State for the checkout value

  // Handle option change and set the price
  const handleOptionChange = (e) => {
    const selectedId = e.target.id;
    setSelectedOption(selectedId);

    // Set the price based on the selected option
    if (selectedId === "option1") {
      setCheckoutValue("$10.00 USD");
    } else if (selectedId === "option2") {
      setCheckoutValue("$18.00 USD");
    } else if (selectedId === "option3") {
      setCheckoutValue("$24.00 USD");
    }
  };

  const renderSelectors = () => (
    <div className="size-and-color flex space-x-4 mt-4">
      <div className="size">
        <label htmlFor="size" className="block">
          Size
        </label>
        <select id="size" className="border p-1 rounded-md">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>
      <div className="color">
        <label htmlFor="color" className="block">
          Color
        </label>
        <select id="color" className="border p-1 rounded-md">
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red">Red</option>
        </select>
      </div>
    </div>
  );

  // Function to render selectors based on the selected option
  const getSelectors = () => {
    let count = 0;
    if (selectedOption === "option1") count = 1;
    else if (selectedOption === "option2") count = 2;
    else if (selectedOption === "option3") count = 3;

    return Array.from({ length: count }, (_, index) => (
      <div key={index}>{renderSelectors()}</div>
    ));
  };

  return (
    <div className="container mt-5 max-w-3xl mx-auto p-4">
      <div className="product-options">
        {/* Option 1 */}
        <div
          className={`option flex flex-col items-center mb-5 p-4 border-3 ${
            selectedOption === "option1"
              ? "border-[#ff7086]"
              : "border-gray-400"
          }`}
        >
          <div className="flex w-full">
            <input
              type="radio"
              name="quantity"
              id="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <label htmlFor="option1" className="mx-4 font-semibold">
              1 Unit
              <span className="discount text-white font-normal mx-2 bg-pink-500 px-2 py-1 rounded-md">
                10% Off
              </span>
              <br />
              Standard Price
            </label>
            <div className="flex flex-col mx-auto">
              <span className="price text-xl font-semibold">$10.00 USD</span>
              <span className="original-price line-through text-gray-500">
                $24.00 USD
              </span>
            </div>
          </div>
          {selectedOption === "option1" && getSelectors()}
        </div>

        {/* Option 2 */}
        <div
          className={`option flex flex-col items-center mb-5 p-4 border-3 ${
            selectedOption === "option2"
              ? "border-[#ff7086]"
              : "border-gray-400"
          }`}
        >
          <div className="flex w-full">
            <input
              type="radio"
              name="quantity"
              id="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            <label htmlFor="option2" className="mx-4 font-semibold">
              2 Units
              <span className="discount text-white font-normal mx-2 bg-pink-500 px-2 py-1 rounded-md">
                20% Off
              </span>
              <br />
              <span className="popular text-sm text-yellow-500">
                MOST POPULAR
              </span>
            </label>
            <div className="flex flex-col mx-auto">
              <span className="price text-xl font-semibold">$18.00 USD</span>
              <span className="original-price line-through text-gray-500">
                $24.00 USD
              </span>
            </div>
          </div>
          {selectedOption === "option2" && getSelectors()}
        </div>

        {/* Option 3 */}
        <div
          className={`option flex flex-col items-center p-4 border-3 ${
            selectedOption === "option3"
              ? "border-[#ff7086]"
              : "border-gray-400"
          }`}
        >
          <div className="flex w-full">
            <input
              type="radio"
              name="quantity"
              id="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            <label htmlFor="option3" className="mx-4 mt-2 font-semibold">
              3 Units
              <span className="discount text-white font-normal mx-2 bg-pink-500 px-2 py-1 rounded-md">
                30% Off
              </span>
            </label>
            <div className="flex flex-col mx-auto">
              <span className="price text-xl font-semibold">$24.00 USD</span>
              <span className="original-price line-through text-gray-500">
                $24.00 USD
              </span>
            </div>
          </div>
          {selectedOption === "option3" && getSelectors()}
        </div>
      </div>

      {/* CheckoutPage component with the passed checkout value */}
      <CheckoutPage checkoutValue={checkoutValue} />
    </div>
  );
}

export default ProductPage;
