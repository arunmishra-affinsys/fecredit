import { Helmet } from "react-helmet-async";
// @mui
import { Container, Typography } from "@mui/material";
// components
// mock
import { LOAN } from "../_mock/loan";
import { LoanList } from "../sections/@dashboard/loan/LoanList";

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Loan </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}></Typography>

        <LoanList products={LOAN} />
      </Container>
    </>
  );
}
