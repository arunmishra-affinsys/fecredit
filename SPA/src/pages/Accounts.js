import { Helmet } from "react-helmet-async";
// @mui
import { Container, Stack, Typography } from "@mui/material";
// components
// mock
import { Account } from "../sections/@dashboard/accounts/Account";
import { ACCOUNT } from "../_mock/accounts";

// ----------------------------------------------------------------------

export default function AccountsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Accounts </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Debit Card
        </Typography>

        <Account products={ACCOUNT} />
      </Container>
    </>
  );
}
