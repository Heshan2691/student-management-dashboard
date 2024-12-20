import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import api from "../axios";
import "./StudentProfile.css";

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await api.get(`/students/${id}`);
        setStudent(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching student:", err);
        setError("Failed to load student data.");
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) return <div>Loading student data...</div>;
  if (error) return <div>{error}</div>;
  if (!student) return <div>Student not found</div>;

  return (
    <div className="student-profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <img
            src="https://via.placeholder.com/150"
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
