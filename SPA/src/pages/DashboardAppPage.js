import React from "react";
// @mui
import { Grid, Container, Typography } from "@mui/material";

import AppWidgetSummary from "../sections/@dashboard/app/AppWidgetSummary";
import { Link } from "react-router-dom";

export default function DashboardAppPage() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" color="initial">
        <Link to={"/dashboard/loan"}>Welcome to BankBuddy</Link>
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          {" "}
          <AppWidgetSummary
            title="Weekly Sales"
            total={111}
            icon={"ant-design:global-outlined"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="info"
            icon={"ant-design:apple-filled"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={"ant-design:windows-filled"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={"ant-design:bug-filled"}
          />
        </Grid>
      </Grid>

      {/*************************** Ads ***********************************/}

      <div className="ads">
        <div className="banner"></div>
        <div className="carousel"></div>
      </div>
    </Container>
  );
}
