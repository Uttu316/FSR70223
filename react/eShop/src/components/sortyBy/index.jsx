import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SortyBy = () => {
  const [sortBy, setSortBy] = useState("");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="sort-by">SortBy</InputLabel>
      <Select
        labelId="sort-by"
        id="sort-by-options"
        value={sortBy}
        label="Sort By"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"asec"}>Asec</MenuItem>
        <MenuItem value={"dsec"}>Dsec</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortyBy;
