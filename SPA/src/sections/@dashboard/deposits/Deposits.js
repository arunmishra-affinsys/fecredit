import React from "react";
import { Grid } from "@mui/material";
import { Card, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// ----------------------------------------------------------------------
const CardWrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 600,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    width: 500,
    minwidth: 600,
    maxHeight: 300,
  },
}));

const ImageContent = styled("img")(({ theme }) => ({
  maxHeight: "fit-content",
  maxWidth: 300,
  borderRadius: theme.spacing(2),
  position: "relative",
  [theme.breakpoints.up("md")]: {
    width: 300,
    marginTop: 0,
  },
}));

const DepositsCard = ({ product }) => {
  return (
    <Link
      to={`/dashboard/deposits/${product}`}
      style={{ textDecoration: "none" }}
    >
      <CardWrapper>
        <ImageContent src={"https://picsum.photos/300"} />

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="h5">{product}</Typography>
          <Typography variant="subtitle">
            <Typography variant="h6" color={"#497174"}>
              Details:
            </Typography>
            <br />
            {/* For Women* (Upto 30 Lakh) 8.60% to 9.10% For Others* (Upto 30 <br />
            Lakh)8.65% to 9.15 % For Women* (30.01 Lakhs to 75 Lakhs)8.85% to{" "}
            <br />
            9.35% For Others* (30.01 Lakhs to 75 Lakhs)8.90% to 9.40% For Women*{" "}
            <br />
            (75.01 Lakhs & Above)8.95% to 9.45% For Others* (75.01 Lakhs &{" "}
            <br />
            Above)9.00% to 9.50% */}
          </Typography>
        </Stack>
      </CardWrapper>
    </Link>
  );
};

export const Deposits = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products?.map((product, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={12}
          md={12}
          display={"flex"}
          justifyContent={"center"}
        >
          <DepositsCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
