import React from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./StudentProfile.css"; // Create this file or reuse styles from TeacherProfile.css

const StudentProfile = () => {
  const { id } = useParams(); // Get the student ID from the URL

  // Sample data for students (replace this with actual data)
  const studentData = {
    1: {
      name: "Alice Johnson",
      email: "alice@school.com",
      class: "3A",
      subjects: "Math, Science, English",
      grades: 92,
      schedule: [
        { time: "8:00 AM - 8:45 AM", subject: "Math - Algebra" },
        { time: "9:00 AM - 9:45 AM", subject: "Science - Biology" },
        { time: "10:00 AM - 10:45 AM", subject: "English - Grammar" },
        { time: "11:00 AM - 11:45 AM", subject: "History - American History" },
        { time: "12:00 PM - 12:45 PM", subject: "Art - Painting" },
      ],
      announcements: [
        { message: "Parent-teacher meeting scheduled for next Monday." },
        { message: "Homework for Math is due by Friday." },
      ],
    },
    2: {
      name: "Bob Smith",
      email: "bob@school.com",
      class: "4B",
      subjects: "Physics, Chemistry, Math",
      grades: 88,
      schedule: [
        { time: "8:30 AM - 9:15 AM", subject: "Physics - Mechanics" },
        { time: "9:30 AM - 10:15 AM", subject: "Chemistry - Organic" },
        { time: "10:30 AM - 11:15 AM", subject: "Math - Geometry" },
        { time: "11:30 AM - 12:15 PM", subject: "History - World History" },
        { time: "1:00 PM - 1:45 PM", subject: "PE - Fitness Training" },
      ],
      announcements: [
        { message: "Physics lab rescheduled to Thursday." },
        { message: "Class trip permissions are due by Wednesday." },
      ],
    },
    // Add more students as needed
  };

  const student = studentData[id]; // Get the student data based on the ID

  if (!student) {
    return <div>Student not found</div>; // Handle case where student doesn't exist
  }

  return (
    <div className="student-profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <img
            src="https://via.placeholder.com/150" // Placeholder image, replace with actual student image if available
            alt="Student"
            className="profile-img"
          />
          <div className="student-details">
            <h2 className="student-name">{student.name}</h2>
            <p className="student-email">{student.email}</p>
            <p className="student-class">Class: {student.class}</p>
            <p className="student-subjects">Subjects: {student.subjects}</p>
            <div className="grades">
              <CircularProgressbar value={student.grades} maxValue={100} />
              <p>Grades: {student.grades}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="schedule">
        <h3>Student's Schedule</h3>
        <div className="schedule-container">
          {student.schedule.map((item, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-time">{item.time}</div>
              <div className="schedule-subject">{item.subject}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="announcements">
        <h3>Announcements</h3>
        {student.announcements.map((announcement, index) => (
          <div key={index} className="announcement-item">
            <p>{announcement.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentProfile;
