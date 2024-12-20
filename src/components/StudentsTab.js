import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import api from "../axios";

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  "& .MuiTableRow-root": {
    backgroundColor: theme.palette.primary.main,
  },
  "& .MuiTableCell-head": {
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
}));

const StyledTable = styled(Table)(({ theme }) => ({
  "& .MuiTableRow-root:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "& .MuiTableCell-body": {
    fontSize: "0.9rem",
    padding: theme.spacing(1.5),
  },
}));

const StudentsTab = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get("/students");
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching students:", err);
        setError("Failed to fetch students. Please try again later.");
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Paper sx={{ padding: 4, margin: 2, borderRadius: 3, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, color: "primary.main" }}>
        Students List
      </Typography>

      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student._id}>
              <TableCell>{student._id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>
                <Link
                  to={`/student/${student._id}`}
                  style={{
                    color: "#1976d2",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  View Profile
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Paper>
  );
};

export default StudentsTab;
