import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoCard from "./InfoCard";

const CardsContainer = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const studentResponse = await axios.get(
          "http://localhost:5000/api/students/count"
        );
        setStudentCount(studentResponse.data.count);

        const teacherResponse = await axios.get(
          "http://localhost:5000/api/teachers/count"
        );
        setTeacherCount(teacherResponse.data.count);
      } catch (error) {
        console.error("There was an error fetching the counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <InfoCard bgColor="bg-blue-500" count={studentCount} label="Students" />
      <InfoCard bgColor="bg-yellow-500" count={teacherCount} label="Teachers" />
      <InfoCard bgColor="bg-purple-500" count="10" label="Staffs" />
      <InfoCard bgColor="bg-orange-500" count="15" label="Awards" />
    </div>
  );
};

export default CardsContainer;
