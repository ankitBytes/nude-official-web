import { Card } from "@nextui-org/react";
import {
  Grid,
  Box,
  Stack,
  Container,
  Typography,
  Rating,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";

import { useEffect } from "react";

import ProductCard from "../components/ProductCard/productCard";
// import CarouselWithButton from "../components/corousel/corousel.jsx";
import ImageCarousel from "../components/corousel/corousel.jsx";
import { useParams } from "react-router-dom";

import { useState } from "react";

import { css } from "@emotion/react";

import Image from "../assets/shoe.jpg";
import shirt from "../assets/tshirt.jpg";
import top from "../assets/top.jpg";

const Product = () => {
  const id = useParams();
  const [productDetails, setProductDetails] = useState();
  
  useEffect(() => {
    
    fetch(`https://fakestoreapi.com/products/${id.id}`)
    .then((res) => res.json())
    .then((product) => {
      setProductDetails(product)
      console.log(product)
    })
    .catch((err) => console.log(`Error occured during fetchong the data of ${id}`, err));
  }, [id])
  const [rating, setRating] = useState();
  

  const styles = {
    productName: css`
      font-size: 2rem;
      font-weight: bolder;
    `,
    price: css`
      padding: 0.5rem 0;
      align-items: center;
    `,
    details: css`
      padding: 3rem 0;
    `,

    text: css`
      color: #87888b;
      font-weight: bold;
      padding-bottom: 1rem;
    `,

    buy: css`
      background: skyblue;
      width: 50%;
      top: 1rem;
      padding: 1rem;
      color: white;
      font-weight: bold;

      &:hover {
        color: black;
        background: orange;
      }
    `,

    mainContent: css`
      background: #fbf4f4;
      padding: 2rem;
      border-radius: 1rem;
    `,
    mainBox: css`
      // background: #fbf4f4;
      padding: 2rem 0;

      @media (max-width: 900px) {
        padding-top: 0;
      }
    `,

    productDetail: css`
      padding: 1rem;
    `,
    cardItem: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    cardContainer: css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    `,
  };

  const label = (value) => {
    if (value < 1.5) {
      return "Very Poor";
    } else if (value >= 1.5 && value < 3) {
      return "Poor";
    } else if (value >= 3 && value < 4) {
      return "Good";
    } else {
      return "Excellent";
    }
  };

  return (
    <Box sx={styles.mainBox}>
      <Container maxWidth="lg" sx={styles.mainContent}>
        <Stack direction={"row"}>
          <Grid container maxWidth={"lg"}>
            <Stack
              spacing={4}
              direction={{ xs: "column", sm: "row", md: "row" }}
            >
              <Grid item sm={12} md={4} direction={"row"}>
              <ImageCarousel images={productDetails?.image} />
              </Grid>

              <Grid sm={6} md={6} xs={12} display={"flex"} alignItems={"center"}>
                <Stack spacing={1}>
                  <Typography sx={styles.productName}>{productDetails?.title}</Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={productDetails?.rating.rate}
                      precision={0.1}
                      readOnly
                    />
                    <Typography>{label(productDetails?.rating.rate)}</Typography>
                  </Stack>
                  <Stack sx={styles.price} direction={"row"} spacing={1}>
                    <Typography
                      sx={{ fontSize: "1.7rem", fontWeight: "bolder" }}
                    >
                      <span>&#8377;</span>{productDetails?.price}
                    </Typography>
                    <Typography sx={{ textDecoration: "line-through", color: 'gray' }}>
                      <span>&#8377;</span>600
                    </Typography>
                    <Typography sx={{ color: "green", fontWeight: "bold" }}>
                      10% off
                    </Typography>
                  </Stack>
                  <Typography>Nikon Z50 Mirrorless Digital Camera with 16-50mm Lens, Rechargeable Lithium-ion Battery, Battery Charger, Camera Strap, Body Cap, Eye Cup</Typography>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-around"}
                    spacing={1}
                  >
                    <Button sx={styles.buy}>Buy Now</Button>
                    <Button sx={styles.buy}>Add To Cart</Button>
                  </Stack>
                </Stack>
              </Grid>
            </Stack>

            <Grid container xs={12} sx={styles.details} md={12}>
              <Grid md={12} style={{ padding: "1rem" }}>
                <Stack spacing={1}>
                  <Typography variant="body1" fontSize={"1.4rem"}>
                    Coupons For You
                  </Typography>
                  <Typography variant="body1">
                    Special PriceGet extra ₹20 off on 5 item(s) (price inclusive
                    of cashback/coupon)T&C
                  </Typography>
                  <Typography variant="h5" sx={{ paddingTop: "1rem" }}>
                    Available Offers
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body1">
                      Eligible for Flipkart Pay Later
                    </Typography>
                    <Typography variant="body1">
                      Buy this product & get Rs.50 off on your next purchase of
                      Fans
                    </Typography>
                    <Typography variant="body1">
                      Buy this product & get Rs.100 off on your next purchase of
                      Fans
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid md={6} sm={6} xs={12} spacing={2} sx={styles.productDetail}>
                <Typography sx={styles.text}>Delivery</Typography>
                <TextField
                  id="standard-search"
                  placeholder="Pincode"
                  type="text"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          sx={css`
                            &:hover {
                              background: none;
                              cursor: pointer;
                            }
                          `}
                        >
                          Check
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography fontWeight={"bold"}>
                  Delivery in 2 Days, Thursday
                </Typography>
              </Grid>
              <Grid md={6} sm={6} xs={12} spacing={2} sx={styles.productDetail}>
                <Typography sx={styles.text}>Highlights</Typography>
                <Stack>
                  <ul style={{ listStyleType: "circle" }}>
                    <li>Ideal For: Men & Women</li>
                    <li>Color: Black</li>
                  </ul>
                </Stack>
              </Grid>
              <Grid md={6} sm={6} xs={12} spacing={2} sx={styles.productDetail}>
                <Typography sx={styles.text}>Services</Typography>
                <Stack spacing={1}>
                  <Typography>Cash On Delivery Available</Typography>
                  <Typography>Cash On Delivery Available</Typography>
                  <Typography>Cash On Delivery Available</Typography>
                </Stack>
              </Grid>
              <Grid md={6} sm={6} xs={12} spacing={2} sx={styles.productDetail}>
                <Typography sx={styles.text}>Seller</Typography>
                <Stack>
                  <a style={{ paddingLeft: "1rem" }}>SYGA</a>
                  <ul style={{ listStyleType: "circle" }}>
                    <li>No Return Applicable</li>
                  </ul>
                  <a style={{ paddingLeft: "1rem" }}>See other details</a>
                </Stack>
              </Grid>
            </Grid>

            <Grid md={12} xs={12}>
              <Stack direction={"row"} spacing={4}>
                <Typography
                  fontWeight={"bold"}
                  color={"#87888b"}
                  paddingLeft={"1rem"}
                >
                  Description
                </Typography>
                <Typography>
                  {productDetails?.description}
                </Typography>
              </Stack>
            </Grid>
            <Typography
              fontSize={{ xs: "1.5rem", sm: "2rem" }}
              fontWeight={"bold"}
              padding={"2rem 0"}
            >
              Related Products
            </Typography>
            <Grid
              container
              spacing={{ xs: 1, sm: 2, md: 3 }}
              sx={styles.cardContainer}
            >
              {products.map((products, index) => (
                <Grid
                  item
                  xs={6}
                  sm={3}
                  md={3}
                  key={index}
                  sx={styles.cardItem}
                >
                  <ProductCard products={products} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

const products = [
  {
    Name: "Product1",
    image: Image,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs.1200",
  },
  {
    Name: "Product2",
    image: shirt,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product3",
    image: Image,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product4",
    image: shirt,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
];

const imageUrls = [shirt, Image, top];

export default Product;
