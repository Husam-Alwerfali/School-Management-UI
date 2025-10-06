"use client";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import { title } from "process";
import Image from "next/image";

const EventCalender = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const event = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: " 12:00 PM  - 2:00 PM",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: " 12:00 PM  - 2:00 PM",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: " 12:00 PM  - 2:00 PM",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="border-none w-full [&_[data-selected-single=true]]:bg-lamaSky [&_[data-selected-single=true]]:text-black [&_[data-selected-single=true]]:rounded-md [&_[data-selected-single=true]]:border-0 [&_.rdp-month_caption]:font-semibold"
      />
      {/* TITLE */}
      <div className=" flex justify-between items-center">
        <h1 className="text-lg font-semibold my-4 m">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {event.map((ev) => (
          <div
            key={ev.id}
            className="border-2 p-4 rounded-xl border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600">{ev.title}</h1>
              <span className="text-sm text-gray-300">{ev.time}</span>
            </div>
            <p className="text-sm text-gray-400 mt-3">{ev.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
