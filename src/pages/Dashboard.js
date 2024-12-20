import React from "react";
import CardsContainer from "../components/CardsContainer";
import ChartsContainer from "../components/ChartsContainer";
import FinanceChart from "../components/FinanceChart";
import CalendarComponent from "../components/CalendarComponent";
import EventsSection from "../components/EventsSection";
import AnnouncementsSection from "../components/AnnouncementsSection";

const Dashboard = () => {
  const eventsData = [
    {
      time: "08:00 AM",
      title: "Homeroom & Announcement",
      status: "Ongoing",
    },
    {
      time: "10:00 AM",
      title: "Class 5-A Math Review & Practice",
      status: "Upcoming",
    },
    {
      time: "10:30 AM",
      title: "Grade 6-B Science Experiment & Discussion",
      status: "Upcoming",
    },
  ];

  const announcementsData = [
    {
      date: "Dec 07, 2024",
      title: "Midterm Exam Schedule Released",
      description:
        "The midterm exam schedule has been uploaded to the portal. Please check and prepare accordingly.",
    },
    {
      date: "Dec 05, 2024",
      title: "New Library Books Arrival",
      description:
        "A new collection of books has arrived at the school library. Visit to explore!",
    },
    {
      date: "Dec 03, 2024",
      title: "Winter Sports Week",
      description:
        "Join us for the winter sports week starting next Monday. Sign up at the PE office.",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-grow gap-6 p-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Cards */}
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <CardsContainer />
          </div>

          {/* Charts */}
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <ChartsContainer />
          </div>

          {/* Finance Chart */}
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <FinanceChart />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/3 flex flex-col gap-6">
          {/* Calendar */}
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <CalendarComponent />
          </div>

          {/* Events */}
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <EventsSection events={eventsData} />
          </div>

          {/* Announcements */}
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <AnnouncementsSection announcements={announcementsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
