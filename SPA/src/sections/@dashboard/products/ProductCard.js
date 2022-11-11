import { Box, Card, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
// utils
import { fCurrency } from "../../../utils/formatNumber";
// components
import Label from "../../../components/label";
import { ColorPreview } from "../../../components/color-utils";

const CardWrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 400,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    maxHeight: 600,
    maxWidth: "75rem",
  },
}));

const ImageContent = styled("img")(({ theme }) => ({
  maxHeight: 400,
  maxWidth: 400,
  borderRadius: theme.spacing(2),
  position: "relative",
  [theme.breakpoints.up("md")]: {
    width: 400,
    marginTop: 0,
  },
}));

export default function ShopProductCard({ product }) {
  const { name, details, cover, price, colors, status, priceSale } = product;

  return (
    <Link
      to={`/dashboard/creditcard/CardDetails/${name}`}
      style={{ textDecoration: "none" }}
    >
      <CardWrapper>
        <Box>
          {status && (
            <Label
              variant="filled"
              color={"info"}
              sx={{
                zIndex: 9,
                top: 10,
                right: 10,
                position: "absolute",
                textTransform: "uppercase",
              }}
            >
              {status}
            </Label>
          )}
        </Box>
        <ImageContent alt={name} src={cover} />

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="subtitle2">{details}</Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <ColorPreview colors={colors} />
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: "text.disabled",
                  textDecoration: "line-through",
                }}
              >
                {priceSale && fCurrency(priceSale)}
              </Typography>
              &nbsp;
              {fCurrency(price)}
            </Typography>
          </Stack>
        </Stack>
      </CardWrapper>
    </Link>
  );
}
