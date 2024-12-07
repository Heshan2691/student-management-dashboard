import React from "react";
import { Card, CardContent, Typography, LinearProgress } from "@mui/material";

const SummaryCard = ({ title, percentage }) => {
  return (
    <Card className="shadow-md">
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <LinearProgress
          variant="determinate"
          value={percentage}
          className="mt-3"
        />
        <Typography className="mt-2 text-gray-600">{percentage}%</Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
