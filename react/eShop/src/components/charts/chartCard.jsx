import { Box, Card } from "@mui/material";
import React from "react";

const ChartCard = (props) => {
  const { children } = props;
  return (
    <Box p={4}>
      <Card>{children}</Card>
    </Box>
  );
};
export default ChartCard;
