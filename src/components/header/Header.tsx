import React from "react";

export function Header() {
  return (
    <div className="container mx-auto p-5">
      <div className="max-w-xs mx-auto  rounded-2xl shadow-md p-6 text-center bg-cyan-100">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          قیمت دلار امروز
        </h2>
        <p className="text-2xl font-semibold text-green-600">82.500</p>
      </div>
    </div>
  );
}
