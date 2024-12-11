import React from "react";
import { Link } from "react-router-dom";
import "./StudentsTab.css"; // Styling for the table

const StudentsTab = () => {
  // Sample data for students
  const students = [
    { id: 1, name: "Alice Johnson", email: "alice@school.com", class: "3A" },
    { id: 2, name: "Bob Smith", email: "bob@school.com", class: "4B" },
    { id: 3, name: "Charlie Brown", email: "charlie@school.com", class: "5C" },
    // Add more students as needed
  ];

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
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>
                <Link
                  to={`/student/${student.id}`}
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
