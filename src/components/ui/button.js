// src/components/ui/button.js

import React from "react";

export const Button = ({ children, onClick, variant = "primary" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg ${
      variant === "secondary"
        ? "bg-gray-500 text-white"
        : "bg-indigo-600 text-white"
    }`}
  >
    {children}
  </button>
);
