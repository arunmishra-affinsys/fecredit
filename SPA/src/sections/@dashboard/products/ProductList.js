// @mui
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

// ----------------------------------------------------------------------

export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid
          item
          key={product.id}
          xs={12}
          sm={12}
          md={12}
          display={"flex"}
          justifyContent={"center"}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
