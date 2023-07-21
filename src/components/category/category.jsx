import Box from "@mui/material/Box";
import {
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { css } from "@emotion/react";

import { MyContext } from "../../context/productContext";
import { useContext } from "react";
import ContextProductCard from "../ProductCard/contextProductCard"


export default function Products() {
  const styles = {
    heading: css`
      text-align: center;
      color: white;
      font-family: "bebas neue";
    `,
    serviceSection: css`
      background-color: #094559;
      min-height: 30vh;
      padding: 3rem 0;
    `,
    cardContainer: css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      background: white;
      padding: 0 2rem 0 1rem;
    `,
    cardItem: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,

    mainC: css`
      // padding: 3rem 5rem;
      background: #f0f2f2;

      @media (max-width: 550px) {
        padding: 3rem 1rem;
      }
    `,

    category: css`
      padding: 2rem;
      background: white;
    `,
  };


  const { products } =  useContext(MyContext);
  console.log("inside the product list")

  return (
    <Box sx={styles.mainC}>
      <Box sx={{ width: "100%" }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={0.7}>
          <Stack sx={styles.category} spacing={1}>
            <Typography variant="h5" sx={{ color: "black" }}>
              Collections
            </Typography>
            <Stack
              direction={{ xs: "row", md: "column" }}
              spacing={{ xs: 2, md: 1 }}
            >
              <Typography
                variant="body1"
                sx={css`
                  color: black;

                  &:hover {
                    color: skyblue;
                    cursor: pointer;
                  }
                `}
              >
                All
              </Typography>
              <Typography
                variant="body1"
                sx={css`
                  color: black;

                  &:hover {
                    color: skyblue;
                    cursor: pointer;
                  }
                `}
              >
                Shirts
              </Typography>
              <Typography
                variant="body1"
                sx={css`
                  color: black;

                  &:hover {
                    color: skyblue;
                    cursor: pointer;
                  }
                `}
              >
                Shoes
              </Typography>
              <Typography
                variant="body1"
                sx={css`
                  color: black;

                  &:hover {
                    color: skyblue;
                    cursor: pointer;
                  }
                `}
              >
                Tops
              </Typography>
              <Typography
                variant="body1"
                sx={css`
                  color: black;

                  &:hover {
                    color: skyblue;
                    cursor: pointer;
                  }
                `}
              >
                Sarees
              </Typography>
            </Stack>
          </Stack>
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 3 }}
            sx={styles.cardContainer}
          >
            {/*{products.map((product, index) => (
              <Grid item xs={12} sm={4} md={4} key={index} sx={styles.cardItem}>
                <ProductCard products={ product } />
              </Grid>
            ))}*/}
            {products?.map((product, index) => (
              <Grid item xs={12} sm={4} md={4} key={index} sx={styles.cardItem}>
                <ContextProductCard data={product} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}

