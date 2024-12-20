import React from "react";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "react-circular-progressbar/dist/styles.css";
import "./TeacherProfile.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TeacherProfile = () => {
  const { id } = useParams();

  const teacherData = {
    1: {
      name: "John Doe",
      email: "john@doe.com",
      subjects: "Math, Geometry",
      phone: "7283941",
      address: "512 Main St, USA",
      classes: "1B, 2A, 3C",
      performance: 90,
      schedule: [
        { time: "8:00 AM - 8:45 AM", class: "4A - Physics" },
        { time: "9:00 AM - 9:45 AM", class: "3B - Chemistry" },
        { time: "10:00 AM - 10:45 AM", class: "2A - Math" },
        { time: "11:00 AM - 11:45 AM", class: "5C - Algebra" },
        { time: "12:00 PM - 12:45 PM", class: "1A - Geometry" },
        { time: "1:00 PM - 1:45 PM", class: "3A - Trigonometry" },
        { time: "2:00 PM - 2:45 PM", class: "2C - Calculus" },
      ],
      announcements: [
        { message: "Test for 4A will be rescheduled to next week." },
        { message: "Extra class for 3B will be held on Friday." },
      ],
    },
    2: {
      name: "Jane Smith",
      email: "jane@smith.com",
      subjects: "English, Literature",
      phone: "9358234",
      address: "126 Elm St, USA",
      classes: "1A, 2B, 3D",
      performance: 85,
      schedule: [
        { time: "8:30 AM - 9:15 AM", class: "2A - English" },
        { time: "9:30 AM - 10:15 AM", class: "3B - Literature" },
        { time: "10:30 AM - 11:15 AM", class: "1A - Grammar" },
        { time: "11:30 AM - 12:15 PM", class: "4C - English Composition" },
        { time: "1:00 PM - 1:45 PM", class: "2B - Poetry" },
        { time: "2:00 PM - 2:45 PM", class: "3D - Modern English" },
        { time: "3:00 PM - 3:45 PM", class: "5A - Advanced Literature" },
        { time: "4:00 PM - 4:45 PM", class: "6C - Reading Comprehension" },
      ],
      announcements: [
        { message: "Essay submissions for 3B are due by the end of the week." },
        { message: "Extra session for 1A on next Monday at 3 PM." },
      ],
    },
    3: {
      name: "Michael Clark",
      email: "michael@clark.com",
      subjects: "Physics, Engineering",
      phone: "8742513",
      address: "389 Pine St, USA",
      classes: "1D, 2B, 4A",
      performance: 92,
      schedule: [
        { time: "7:30 AM - 8:15 AM", class: "5B - Mechanics" },
        { time: "8:30 AM - 9:15 AM", class: "6A - Electrical Engineering" },
        { time: "9:30 AM - 10:15 AM", class: "3A - Thermodynamics" },
        { time: "10:30 AM - 11:15 AM", class: "2B - Engineering Basics" },
        { time: "11:30 AM - 12:15 PM", class: "4A - Fluid Mechanics" },
        { time: "12:30 PM - 1:15 PM", class: "1D - Kinematics" },
        { time: "1:30 PM - 2:15 PM", class: "2C - Statics" },
        { time: "2:30 PM - 3:15 PM", class: "3B - Vibrations" },
        { time: "3:30 PM - 4:15 PM", class: "5C - Advanced Physics" },
      ],
      announcements: [
        { message: "Lab sessions for 3A will start next week." },
        { message: "Reminder: Final project submission for 6A by Friday." },
      ],
    },
    4: {
      name: "Emily Davis",
      email: "emily@davis.com",
      subjects: "Biology, Environmental Science",
      phone: "5928736",
      address: "877 Maple St, USA",
      classes: "2C, 3A, 4D",
      performance: 88,
      schedule: [
        { time: "8:00 AM - 8:45 AM", class: "4A - Biology" },
        { time: "9:00 AM - 9:45 AM", class: "2C - Environmental Science" },
        { time: "10:00 AM - 10:45 AM", class: "5D - Microbiology" },
        { time: "11:00 AM - 11:45 AM", class: "3A - Ecology" },
        { time: "12:00 PM - 12:45 PM", class: "4D - Genetics" },
        { time: "1:00 PM - 1:45 PM", class: "2B - Botany" },
        { time: "2:00 PM - 2:45 PM", class: "3C - Zoology" },
        { time: "3:00 PM - 3:45 PM", class: "5A - Evolutionary Biology" },
      ],
      announcements: [
        { message: "Field trip for 2C will be next Friday." },
        { message: "Test for 3A will be rescheduled due to weather." },
      ],
    },
    5: {
      name: "Robert Williams",
      email: "robert@williams.com",
      subjects: "Chemistry, Organic Chemistry",
      phone: "3485921",
      address: "101 Oak St, USA",
      classes: "1B, 3C, 4A",
      performance: 95,
      schedule: [
        { time: "8:00 AM - 8:45 AM", class: "3C - Organic Chemistry" },
        { time: "9:00 AM - 9:45 AM", class: "2A - General Chemistry" },
        { time: "10:00 AM - 10:45 AM", class: "4A - Inorganic Chemistry" },
        { time: "11:00 AM - 11:45 AM", class: "5B - Chemical Engineering" },
        { time: "12:00 PM - 12:45 PM", class: "1B - Chemistry Lab" },
        { time: "1:00 PM - 1:45 PM", class: "3D - Physical Chemistry" },
        { time: "2:00 PM - 2:45 PM", class: "4C - Biochemistry" },
      ],
      announcements: [
        { message: "Chemistry lab for 1B will be moved to Thursday." },
        { message: "3C will have an additional class this Friday." },
      ],
    },
  };

  const teacher = teacherData[id];

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  const data = {
    labels: ["Performance"],
    datasets: [
      {
        label: "Teacher Performance",
        data: [teacher.performance],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="teacher-profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <img
            src="https://via.placeholder.com/150"
            alt="Teacher"
            className="profile-img"
          />
          <div className="teacher-details">
            <h2 className="teacher-name">{teacher.name}</h2>
            <p className="teacher-email">{teacher.email}</p>
            <p className="teacher-subjects">{teacher.subjects}</p>
            <div className="performance">
              <h3>Performance</h3>
              <Bar data={data} options={options} />
              <p>Performance: {teacher.performance}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="schedule">
        <h3>Teacher's Schedule</h3>
        <div className="schedule-container">
          {teacher.schedule.map((item, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-time">{item.time}</div>
              <div className="schedule-class">{item.class}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="announcements">
        <h3>Announcements</h3>
        {teacher.announcements.map((announcement, index) => (
          <div key={index} className="announcement-item">
            <p>{announcement.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherProfile;
