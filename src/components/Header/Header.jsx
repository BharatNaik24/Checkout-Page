import React from "react";

function Header() {
  return (
    <div className="container relative">
      <hr className="bg-gray-500 w-full h-0.5" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          style={{
            color: "#ff7086",
          }}
          className="bg-white px-2 py-2 -mt-1 relative text-bold font-semibold text-4xl"
        >
          YAY! it's BOGO
        </h1>
      </div>
    </div>
  );
}

export default Header;
