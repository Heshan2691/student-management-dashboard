import React from "react";
import { Link } from "react-router-dom";

const teachers = [
  { id: 1, name: "Dean Guerrero" },
  { id: 2, name: "Nell Goodman" },
];

const TeacherList = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Teachers</h1>
      <ul className="space-y-2">
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <Link
              to={`/teacher/${teacher.id}`}
              className="text-blue-600 hover:underline"
            >
              {teacher.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
