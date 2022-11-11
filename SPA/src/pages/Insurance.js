import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// components

// mock
import { INSURANCE_DATA } from "../_mock/insurance";
import { InsuranceList } from "../sections/@dashboard/insurance/InsuranceList";

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Insurance | Minimal UI </title>
      </Helmet>

      <Container>
        <InsuranceList products={INSURANCE_DATA.DATA} />
      </Container>
    </>
  );
}
