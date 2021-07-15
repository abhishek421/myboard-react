import React from 'react';
import './style.css';
import Card from './Components/Card';

export default function App() {
  return (
    <div className="flex flex-col md:flex-wrap items-center h-screen p-4 w-full">
      <div className="flex flex-col justify-between w-full md:w-1/3 md:border-2 md:border-gray-800 md:rounded-xl md:px-4 md:overflow-scroll md:h-full">
        <p className="text-2xl text-center font-semibold sticky top-0 bg-white p-4">
          Academics
        </p>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex flex-col justify-between w-full md:w-1/3 md:border-2 md:border-gray-800 md:rounded-xl md:px-4 md:overflow-scroll md:h-full">
        <p className="text-2xl text-center font-semibold sticky top-0 bg-white p-4">
          Internship
        </p>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
