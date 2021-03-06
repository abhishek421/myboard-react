import React, { useState } from 'react';
import { Popover } from '@headlessui/react';

export default function AddBtn({ data, setData }) {
  const [ipTitle, setTitle] = useState('');
  const [ipDue, setDue] = useState('');
  const [ipBrand, setBrand] = useState('');
  const addTask = () => {
    let newData = {
      title: ipTitle,
      due: ipDue,
      brand: ipBrand
    };
    setData(data => [...data, newData]);
  };
  return (
    <Popover className="fixed bottom-10 right-10 z-10">
      {({ open }) => (
        <>
          <Popover.Panel className="fixed top-0 inset-0 py-24 px-10 md:px-80 w-full h-full z-10 bg-gray-800 bg-opacity-50">
            <div className="flex flex-col shadow-xl h-full justify-evenly rounded-xl border-4 border-gray-300 gap-4 bg-white p-3">
              <p className="text-2xl font-bold self-center">
                Add Task to Board
              </p>
              <div className="w-full">
                <p>Title</p>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-300 rounded-xl"
                  value={ipTitle}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className="w-full">
                <p>Due Date</p>
                <input
                  type="date"
                  className="w-full p-2 bg-gray-300 rounded-xl"
                  value={ipDue}
                  onChange={e => setDue(e.target.value)}
                />
              </div>
              <div className="w-full">
                <p>Brand</p>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-300 rounded-xl"
                  value={ipBrand}
                  onChange={e => setBrand(e.target.value)}
                />
              </div>
              <button
                onClick={addTask}
                className="p-2 rounded-xl bg-purple-600 text-white font-bold text-2xl"
              >
                Submit
              </button>
            </div>
          </Popover.Panel>
          <Popover.Button
            className={`absolute bottom-0 right-0 z-10 p-2 rounded-lg font-bold text-white rounded-full inline-block border-2 border-gray-600 bg-gray-400 transition duration-100 ease-in-out transform ${
              open ? 'rotate-45' : ''
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Popover.Button>
        </>
      )}
    </Popover>
  );
}
