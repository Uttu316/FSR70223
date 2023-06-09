import { Chip, Stack } from "@mui/material";
import React from "react";

const categories = [
  {
    id: "groceries",
    label: "Groceries",
  },
  {
    id: "clothings",
    label: "Clothings",
  },
  {
    id: "accessories",
    label: "Accessories",
  },
  {
    id: "jwellery",
    label: "Jwellery",
  },
];


const Categories = () => {
  const onHandFilter = (id) => {};
  return (
    <Stack direction={'row'} spacing={2}>
      {categories.map(({ id, label }) => (
        <Chip
          label={label}
          key={id}
          size='medium'
          variant="outlined"
          onClick={() => onHandFilter(id)}
        />
      ))}
    </Stack>
  );
};
export default Categories;
