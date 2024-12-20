import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Typography,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

// Styled Table Head
const StyledTableHead = styled(TableHead)(({ theme }) => ({
  "& .MuiTableRow-root": {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  "& .MuiTableCell-head": {
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    padding: theme.spacing(2),
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
}));

const StyledTable = styled(Table)(({ theme }) => ({
  "& .MuiTableCell-body": {
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
  },
  "& .MuiTableRow-root:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const TeachersTab = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/teachers");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) =>
    setRowsPerPage(parseInt(event.target.value, 10));

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
          Error: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Paper sx={{ padding: 4, margin: 2, borderRadius: 3, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, color: "primary.main" }}>
        Teachers
      </Typography>

      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Subjects</TableCell>
            <TableCell>Classes</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {teachers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((teacher, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link
                    to={`/teacher/${teacher.id}`}
                    style={{
                      color: "#1976d2",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    {teacher.name}
                  </Link>
                </TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>{teacher.subjects}</TableCell>
                <TableCell>{teacher.classes}</TableCell>
                <TableCell>{teacher.phone}</TableCell>
                <TableCell>{teacher.address}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        component="div"
        count={teachers.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          "& .MuiTablePagination-toolbar": {
            justifyContent: "space-between",
          },
        }}
      />
    </Paper>
  );
};

export default TeachersTab;
