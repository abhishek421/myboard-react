import React, { useState } from 'react';
import './style.css';
import Card from './Components/Card';
import AddBtn from './Components/AddBtn';

export default function Home() {
  const [date, setDate] = useState('');
  return (
    <div className="flex flex-col md:flex-wrap items-center h-screen p-4 w-full md:bg-gray-200">
      <AddBtn />
      <div className="flex flex-col w-full md:w-1/3 md:bg-white md:shadow-2xl md:border-gray-800 md:rounded-xl md:px-4 md:overflow-scroll md:h-full">
        <p className="text-2xl text-center font-semibold sticky top-0 bg-white p-4">
          Placements
        </p>
        <Card due="2021-07-17" title="JusPay Talscale Exam" brand="juspay" />
        <Card
          due="2021-08-14"
          title="TCS NQT Form Fill"
          brand="tata consultancy services"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/3 md:bg-white md:shadow-2xl md:border-gray-800 md:rounded-xl md:px-4 md:overflow-scroll md:h-full">
        <p className="text-2xl text-center font-semibold sticky top-0 bg-white p-4">
          Academics
        </p>
        <Card
          due="2021-07-17"
          title="RTU Mail for Back"
          brand="rajasthan technical university"
        />
        <Card
          due="2021-07-25"
          title="Data Structures Study"
          brand="geeksforgeeks"
        />
      </div>
    </div>
  );
}
