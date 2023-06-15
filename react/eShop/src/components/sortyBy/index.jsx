import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";

const SortyBy = () => {
  const [param, setParams] = useSearchParams();

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      param.set("sortBy", value);
    } else {
      param.delete("sortBy");
    }

    setParams(param);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="sort-by">SortBy</InputLabel>
      <Select
        labelId="sort-by"
        id="sort-by-options"
        label="Sort By"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"asc"}>Price: Low to High</MenuItem>
        <MenuItem value={"desc"}>Price: High to Low</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortyBy;
