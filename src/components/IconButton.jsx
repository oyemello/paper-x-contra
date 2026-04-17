"use client";

import React, { useState } from 'react';

/**
 * IconButton component that handles toggle selection state.
 * - Hover: Thickens border (handled via CSS .icon-button:hover)
 * - Click: Toggles the '.selected' class (handled via CSS .icon-button.selected)
 */
export default function IconButton({ children, className = "" }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div 
      className={`icon-button ${isSelected ? 'selected' : ''} ${className}`}
      onClick={() => setIsSelected(!isSelected)}
    >
      {children}
    </div>
  );
}
