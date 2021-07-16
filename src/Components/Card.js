import React, { useState, useEffect } from 'react';

export default function Card({ due, brand, title }) {
  const [company, setCompany] = useState('');

  async function fetchData() {
    const response = await fetch(
      `https://company.clearbit.com/v1/domains/find?name=${brand}`
    )
      .then(response => response.json())
      .then(data => setCompany(data));
  }

  useEffect(() => {
    fetchData();
  });
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  let curr_date = new Date();
  let due_date = due ? new Date(due) : new Date();
  let formatted_date =
    due_date.getDate() +
    ' ' +
    months[due_date.getMonth()] +
    ', ' +
    due_date.getFullYear();
  let one_day = 1000 * 60 * 60 * 24;
  let days_left = Math.ceil(
    (due_date.getTime() - curr_date.getTime()) / one_day
  );
  return (
    <div className="flex flex-row justify-between items-center h-20 rounded-xl border-2 border-gray-300 w-full my-1 p-2">
      <img
        src={`//logo.clearbit.com/${brand}`}
        className="object-contain w-16 rounded-lg"
      />
      <div className="flex flex-col flex-grow mx-2">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm font-normal">{formatted_date}</p>
      </div>
      <div className="h-16 w-16 bg-red-600 p-2 grid place-items-center rounded-lg text-white">
        <p className="text-xl font-bold">{days_left}</p>
        <p className="font-semibold" style={{ fontSize: 10 }}>
          {days_left > 1 ? 'Days' : 'Day'} Left
        </p>
      </div>
    </div>
  );
}
