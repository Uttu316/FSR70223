import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";

const ellipses = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};
const ProductCard = (props) => {
  const { info } = props;
  const { title, price, image, description, category } = info || {};
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          height="240"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography
            sx={{ ...ellipses }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ ...ellipses }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
          <Chip sx={{ mt: 2 }} label={category.toUpperCase()} />
          <Typography
            sx={{ ...ellipses }}
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
