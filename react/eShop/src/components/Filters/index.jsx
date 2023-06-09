import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Categories from "../categories";
import SortyBy from "../sortyBy";

const Filters = () => {
  return (
    <Box m={4}>
      <Divider />
      <Box display="flex" justifyContent={"space-between"} alignItems="center">
        <div className="store-categories">
          <Categories />
        </div>
        <div className="store-filter">
          <SortyBy />
        </div>
      </Box>
      <Divider />
    </Box>
  );
};

export default Filters;
