import React from 'react';
import { Popover } from '@headlessui/react';

export default function AddBtn() {
  return (
    <Popover className="fixed bottom-10 right-10 z-10">
      {({ open }) => (
        <>
          <Popover.Panel className="fixed top-0 inset-0 py-24 px-10 md:px-40 w-full h-full z-10 bg-gray-800 bg-opacity-50">
            <div className="flex flex-col shadow-xl h-full rounded-xl border-4 border-gray-300 bg-white p-3">
              <p className="text-2xl font-bold self-center">Add Task</p>
            </div>

            <img src="/solutions.jpg" alt="" />
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
