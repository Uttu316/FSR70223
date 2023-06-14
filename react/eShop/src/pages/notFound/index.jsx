import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/notfound.svg";

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box textAlign={"center"} m={8}>
        <img height={400} width={"100%"} src={NotFoundImg} alt="not found" />
        <Typography mt={2} mb={4} component={"h2"} variant="h4">
          404 Page Not Found
        </Typography>
        <Link to="/">
          <Typography  component={"p"} variant="button">
            Go to Home
          </Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
