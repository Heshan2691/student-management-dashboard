import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const MetricCard = ({ title, value, color }) => {
  return (
    <Card className="shadow-lg">
      <CardContent>
        <Typography variant="h5" className={`text-${color}-500`}>
          {title}
        </Typography>
        <Typography variant="h4" className="mt-2">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
