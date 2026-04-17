"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Import images from the local components/images folder
import Book2 from './images/Book 2.png';
import Book3 from './images/Book 3.png';
import BookMid from './images/BookMid.png';
import Book4 from './images/Book 4.png';
import Book5 from './images/Book 5.png';

const BOOKS = [
  { id: 'b2', src: Book2, label: 'Book 2' },
  { id: 'b3', src: Book3, label: 'Book 3' },
  { id: 'bm', src: BookMid, label: 'BookMid' },
  { id: 'b4', src: Book4, label: 'Book 4' },
  { id: 'b5', src: Book5, label: 'Book 5' },
];

export default function BookCarousel() {
  // Current index of the book that is at the center (Position 3)
  const [centerIndex, setCenterIndex] = useState(2); // BookMid is index 2

  useEffect(() => {
    const interval = setInterval(() => {
      // Shift left to right logic: 
      // To move books right, we decrement the conceptual 'center' index in the circular pool
      setCenterIndex((prev) => (prev - 1 + BOOKS.length) % BOOKS.length);
    }, 6000); // 5s hold + 1s transition

    return () => clearInterval(interval);
  }, []);

  // Helper to get index relative to center with circular wrapping
  const getIndexAtPosition = (posOffset) => {
    return (centerIndex + posOffset + BOOKS.length) % BOOKS.length;
  };

  /**
   * We'll render 7 conceptual slots:
   * Slot -3: Off-screen Left (Scale 0, Opacity 0) -> Entry point
   * Slot -2: Far Left (Scale 50%, Opacity 50%) -> Book 2 style
   * Slot -1: Inner Left (Scale 75%, Opacity 75%) -> Book 3 style
   * Slot  0: Middle (Scale 100%, Opacity 100%) -> BookMid style
   * Slot  1: Inner Right (Scale 75%, Opacity 75%) -> Book 4 style
   * Slot  2: Far Right (Scale 50%, Opacity 50%) -> Book 5 style
   * Slot  3: Off-screen Right (Scale 0, Opacity 0) -> Exit point
   */
  const slots = [-3, -2, -1, 0, 1, 2, 3];

  const getSlotStyles = (slot) => {
    // base styles with absolute centering for both axes
    const base = "absolute transition-all duration-1000 ease-in-out flex items-center justify-center pointer-events-none top-1/2 -translate-y-1/2 -translate-x-1/2";

    // Increased gap around the center book (20% inner, 15% outer)
    switch (slot) {
      case -3: return `${base} left-[-5%] scale-0 opacity-0 z-0`;
      case -2: return `${base} left-[15%] scale-50 opacity-50 z-10`;
      case -1: return `${base} left-[30%] scale-75 opacity-75 z-20`;
      case 0: return `${base} left-[50%] scale-100 opacity-100 z-30`;
      case 1: return `${base} left-[70%] scale-75 opacity-75 z-20`;
      case 2: return `${base} left-[85%] scale-50 opacity-50 z-10`;
      case 3: return `${base} left-[105%] scale-0 opacity-0 z-0`;
      default: return `${base} scale-0 opacity-0`;
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[511px] overflow-hidden">
      {BOOKS.map((book, bookIdx) => {
        let slot = bookIdx - centerIndex;

        // Circular logic for 5 books
        if (slot > 2) slot -= 5;
        if (slot < -2) slot += 5;

        return (
          <div
            key={book.id}
            className={getSlotStyles(slot)}
            style={{ width: '400px', height: '600px' }}
          >
            <Image
              src={book.src}
              alt={book.label}
              className="object-contain rounded-lg"
              priority
            />
          </div>
        );
      })}
    </div>
  );
}
