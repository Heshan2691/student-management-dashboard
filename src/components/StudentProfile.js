import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import api from "../axios"; // Import axios instance or use axios directly
import "./StudentProfile.css"; // Create this file or reuse styles from TeacherProfile.css

const StudentProfile = () => {
  const { id } = useParams(); // Get the student ID from the URL
  const [student, setStudent] = useState(null); // State for student data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  // Fetch student data from the backend
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await api.get(`/students/${id}`); // Fetch student by ID
        setStudent(response.data); // Set student data
        setLoading(false); // Set loading to false
      } catch (err) {
        console.error("Error fetching student:", err);
        setError("Failed to load student data.");
        setLoading(false); // Set loading to false
      }
    };

    fetchStudent();
  }, [id]); // Dependency array ensures the effect runs when `id` changes

  // Handle loading and error states
  if (loading) return <div>Loading student data...</div>;
  if (error) return <div>{error}</div>;
  if (!student) return <div>Student not found</div>; // Handle case where student doesn't exist

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
            <p className="student-subjects">
              Subjects: {student.subjects.join(", ")} {/* Assuming array */}
            </p>
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
