"use client";
import React, { useEffect } from 'react';

export default function GrabInitializer() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // Lazily load react-grab only on the client inside development mode
      import("react-grab").catch(err => console.warn("react-grab failed to load:", err));
    }
  }, []);
  return null;
}
