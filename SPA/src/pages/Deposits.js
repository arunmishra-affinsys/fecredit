import { Helmet } from "react-helmet-async";
// @mui
import { Container, Typography } from "@mui/material";
// components
// mock
import { Deposits } from "../sections/@dashboard/deposits/Deposits";
import { DEPOSITS } from "../_mock/deposits";

// ----------------------------------------------------------------------

export default function DebitCardPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Deposits | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Deposits
        </Typography>

        <Deposits products={DEPOSITS} />
      </Container>
    </>
  );
}
