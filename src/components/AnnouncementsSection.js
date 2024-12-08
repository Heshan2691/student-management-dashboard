import React from "react";

const AnnouncementsSection = ({ announcements }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
          >
            <p className="text-sm text-gray-500">{announcement.date}</p>
            <h3 className="text-lg font-semibold text-gray-800">
              {announcement.title}
            </h3>
            <p className="text-sm text-gray-600">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsSection;
