import React from 'react';

export default function Card() {
  return (
    <div className="flex flex-row justify-between items-center h-20 shadow-xl rounded-xl border-2 border-gray-300 w-full my-2 p-2">
      <img
        src="https://i2.wp.com/orissadiary.com/wp-content/uploads/2020/11/dPLzK52V_400x400.jpg?fit=400%2C400&ssl=1"
        className="object-contain h-full"
      />
      <div className="flex flex-col flex-grow mx-2">
        <p className="text-lg font-semibold">TCS NQT Form Fill</p>
        <p className="text-sm font-normal">13 August 2021</p>
      </div>
      <div className="h-16 w-16 bg-red-600 p-2 grid place-items-center rounded-lg text-white">
        <p className="text-xl font-bold">12</p>
        <p className="font-semibold" style={{ fontSize: 10 }}>
          Days Left
        </p>
      </div>
    </div>
  );
}
