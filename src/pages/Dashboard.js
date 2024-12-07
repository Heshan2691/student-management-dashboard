import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent>
          <Typography variant="h5">Total Students</Typography>
          <Typography variant="h6" className="text-blue-500">
            250
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5">Total Teachers</Typography>
          <Typography variant="h6" className="text-green-500">
            25
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5">Total Classes</Typography>
          <Typography variant="h6" className="text-purple-500">
            15
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
