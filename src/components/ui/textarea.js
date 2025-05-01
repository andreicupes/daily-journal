// src/components/ui/textarea.js

import React from "react";

export const Textarea = ({ value, onChange, placeholder, className }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full p-4 border rounded-lg ${className}`}
  />
);
