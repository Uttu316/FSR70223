import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/system";

const HeroBanner = () => {
  return (
    <Carousel
      swipeable={true}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
    >
      <Box height={400}>
        <img
          height={"100%"}
          src="https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-ecommerce-banner-planning-segmentation-selection-image_1375247.jpg"
        />
      </Box>
      <Box height={400}>
        <img
          height={"100%"}
          src="https://img.pikbest.com/backgrounds/20220119/e-commerce-carnival-shopping-colorful-gradient-e-commerce-event-poster-background_6243918.jpg!bw700"
        />
      </Box>
      <Box height={400}>
        <img
          height={"100%"}
          src="https://static.vecteezy.com/system/resources/thumbnails/003/240/364/small/shopping-online-on-phone-paper-art-modern-pink-background-gifts-box-free-vector.jpg"
        />
      </Box>
    </Carousel>
  );
};

export default HeroBanner;
