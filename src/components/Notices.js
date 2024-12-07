import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Notices = ({ notices }) => {
  return (
    <Card className="shadow-md">
      <CardContent>
        <Typography variant="h6" className="font-bold mb-4">
          Notices & Announcements
        </Typography>
        {notices.map((notice, index) => (
          <Typography key={index} className="mb-2 text-gray-700">
            {notice}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default Notices;
