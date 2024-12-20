import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import TeachersTab from "./components/TeachersTab";
import TeacherProfile from "./components/TeacherProfile";
import StudentProfile from "./components/StudentProfile";
import StudentsTab from "./components/StudentsTab";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <div className="flex">
          <Sidebar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/teachers" element={<TeachersTab />} />
              <Route path="/teacher/:id" element={<TeacherProfile />} />{" "}
              <Route path="/student/:id" element={<StudentProfile />} />
              <Route path="/students" element={<StudentsTab />} />
              {/* Dynamic route */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
