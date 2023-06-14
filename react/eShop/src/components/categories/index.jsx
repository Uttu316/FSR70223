import { Chip, Skeleton, Stack } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategories } from "../../actions/homeActions";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [apiStatus, setApiStatus] = useState("");

  const [param, setParams] = useSearchParams();

  const fetchCategories = () => {
    setApiStatus("loading");
    getCategories()
      .then((data) => {
        setCategories(data || []);
        setApiStatus("success");
      })
      .catch((err) => {
        setApiStatus("error");
      });
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const showLoader = apiStatus === "loading";

  // todo: improve this for replacing already selected values
  const onHandFilter = (id) => {
   let selectedCategories =  param.getAll("category");

   if(selectedCategories.includes(id)){
    selectedCategories = selectedCategories.filter((i)=>i!==id) 
    if(!selectedCategories.length){
      param.delete('category')
    }else{
      param.set('category',selectedCategories)
    }
   }else{
    param.append('category',id)
   }

    setParams(param)
  };
  console.log(param.getAll('category'))

  return (
    <Stack direction={"row"} spacing={2}>
      {Array.isArray(categories) &&
        categories.map(({ id, label }) => (
          <Chip
            label={label}
            key={id}
            size="medium"
            variant={
              param.getAll("category").includes(id) ? "filled" : "outlined"
            }
            onClick={() => onHandFilter(id)}
          />
        ))}
      {showLoader &&
        [0, 0, 0, 0].map((_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            sx={{ borderRadius: 20 }}
            width={117}
            height={32}
          />
        ))}
    </Stack>
  );
};
export default Categories;
