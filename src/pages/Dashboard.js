import React from "react";
import Sidebar from "../components/Sidebar";
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
    <div className="flex">
      <Sidebar />

      <div className="flex-grow p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <CardsContainer />

        <ChartsContainer />

        <div className="col-span-2">
          <FinanceChart />
        </div>
      </div>

      <div className="flex-grow p-6 bg-gray-50">
        <div className="col-span-1">
          <CalendarComponent />
        </div>

        <div className="col-span-1">
          <EventsSection events={eventsData} />
        </div>

        <div className="col-span-1">
          <AnnouncementsSection announcements={announcementsData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
