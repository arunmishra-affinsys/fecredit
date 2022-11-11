import { Helmet } from "react-helmet-async";
import { useState } from "react";
// @mui
import { Container, Stack, Typography } from "@mui/material";
// components
// mock
import { DebitCard } from "../sections/@dashboard/debitcard/DebitCard";
import { DEBIT_CARD } from "../_mock/debitcard";

// ----------------------------------------------------------------------

export default function DebitCardPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Debit Card
        </Typography>

        <DebitCard products={DEBIT_CARD} />
      </Container>
    </>
  );
}
