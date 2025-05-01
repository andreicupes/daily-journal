// src/components/ui/tabs.js

import React from "react";

// Tabs component to manage state and render children
export const Tabs = ({ children, value, onValueChange }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { value, onValueChange });
      })}
    </div>
  );
};

// List of tabs (for category selection)
export const TabsList = ({ children }) => <div className="flex gap-4">{children}</div>;

// A Tab button, which updates value when clicked
export const TabsTrigger = ({ value, onValueChange, children }) => (
  <button
    onClick={() => onValueChange(value)} // onClick will invoke onValueChange
    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
  >
    {children}
  </button>
);

// Content for each tab (for prompts)
export const TabsContent = ({ children }) => <div>{children}</div>;
