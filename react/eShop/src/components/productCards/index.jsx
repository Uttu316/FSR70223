import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ellipses = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};
const ProductCard = (props) => {
  const navigate = useNavigate()
  const { info } = props;
  const { title, price, image, description, category, id } = info || {};

  const onClickProduct =()=>{
    navigate(`/product/${id}`)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onClickProduct}>
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            height="240"
            image={image}
            alt={title}
          />
        <CardContent>
          <Typography
            sx={{ ...ellipses, textDecoration: "none" }}
            color="black"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ ...ellipses, textDecoration: "none" }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
          <Chip sx={{ mt: 2 }} label={category.toUpperCase()} />
          <Typography
            sx={{ ...ellipses, textDecoration: "none" }}
            mt={2}
            fontWeight={700}
            color="green"
          >
            Rs. {price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
