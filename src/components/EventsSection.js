import React from "react";

const EventsSection = ({ events }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">{event.time}</span>
              <span className="font-semibold text-lg text-gray-800">
                {event.title}
              </span>
            </div>
            <div
              className={`px-3 py-1 text-sm font-medium rounded-full ${
                event.status === "Ongoing"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {event.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
