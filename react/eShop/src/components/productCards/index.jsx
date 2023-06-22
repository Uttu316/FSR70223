import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeFromCart } from "../../redux/actions/cartActions";

const ellipses = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { cartItems = [] } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const { info } = props;
  const { title, price, image, description, category, id } = info || {};

  const onClickProduct = () => {
    navigate(`/product/${id}`);
  };
  const onAddToCart = () => {
    dispatch(addItemToCart(info));
  };
  const onRemoveFromCart =()=>{
    dispatch(removeFromCart(id))
  }

  const isAlreadyInCart = cartItems.find((i) => i.id === id);
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
        {!isAlreadyInCart && (
          <Button size="small" color="primary" onClick={onAddToCart}>
            Add to Cart
          </Button>
        )}
          {isAlreadyInCart && (
          <Button size="small" color="primary" onClick={onRemoveFromCart}>
            Remove from Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
export default ProductCard;
