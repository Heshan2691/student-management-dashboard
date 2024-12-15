import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../axios"; // Import axios instance or use axios directly
import "./StudentsTab.css"; // Styling for the table

const StudentsTab = () => {
  const [students, setStudents] = useState([]); // State to store students data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch students from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get("/students"); // API call to get all students
        setStudents(response.data); // Set students data
        setLoading(false); // Set loading to false
      } catch (err) {
        console.error("Error fetching students:", err);
        setError("Failed to fetch students. Please try again later.");
        setLoading(false); // Set loading to false
      }
    };

    fetchStudents();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Render loading, error, or the table
  if (loading) return <p>Loading students...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="students-tab-container">
      <h2 className="students-tab-title">Students List</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              {" "}
              {/* Use _id from MongoDB */}
              <td>{student._id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>
                <Link
                  to={`/student/${student._id}`}
                  className="view-profile-link"
                >
                  View Profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTab;
