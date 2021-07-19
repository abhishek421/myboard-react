import React, { useState } from 'react';
import './style.css';
import Card from './Components/Card';
import AddBtn from './Components/AddBtn';

export default function App() {
  const [data, setData] = useState([]);

  return (
    <div className="flex flex-col md:flex-wrap items-center h-screen p-4 w-full md:bg-gray-200">
      <AddBtn data={data} setData={setData} />
      <div className="flex flex-col w-full md:w-1/3 md:bg-white md:shadow-2xl md:border-gray-800 md:rounded-xl md:px-4 md:overflow-scroll md:h-full">
        <p className="text-2xl text-center font-semibold sticky top-0 bg-white p-4">
          Tasks
        </p>
        {data.length ? (
          data.map(item => (
            <Card title={item.title} due={item.due} brand={item.brand} />
          ))
        ) : (
          <div className="w-full h-full grid place-items-center text-gray-400 font-semibold text-xl">
            No Tasks Available{' '}
          </div>
        )}
      </div>
    </div>
  );
}
