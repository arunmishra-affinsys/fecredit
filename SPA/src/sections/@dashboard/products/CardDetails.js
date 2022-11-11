import { useParams } from "react-router-dom";
import {
  Grid,
  Avatar,
  Card,
  CardActions,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useState } from "react";

export const CardDetails = () => {
  const [expand, setExpand] = useState();
  const params = useParams();
  return (
    <>
      <Paper>
        <Card style={{ textAlign: "center" }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={{ backgroundColor: "red" }}>
                R
              </Avatar>
            }
            title={params.id}
            subheader={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis iure quisquam possimus nam odit obcaecati assumenda architecto dolorem repellat"
            }
          />
          <CardActions>
            <Grid container justify="center">
              <IconButton onClick={() => setExpand(!expand)}>
                <ArrowDropDownIcon />
              </IconButton>
            </Grid>
          </CardActions>
          <Collapse in={expand}>
            <Typography>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos debitis atque excepturi ullam, harum aspernatur nisi?
              Id sunt fugiat aperiam eaque similique autem facere qui quisquam
              doloremque tenetur ut iste laborum, sint atque repudiandae
              voluptatibus natus neque, voluptates aut! Doloribus, tenetur
              quibusdam? Asperiores iusto, dolore veritatis nemo, porro dicta
              ipsa libero tempora minima iste, eligendi et dolores sit sapiente
              quis reprehenderit repudiandae aliquam eaque magnam illo hic.
              Quidem itaque quos corporis quod illo delectus accusamus
              repellendus fuga impedit veniam. Voluptates magni dolorem, facere,
              explicabo nobis dignissimos similique amet necessitatibus velit
              iste fugit! Alias earum perferendis asperiores at nam in error?{" "}
            </Typography>
          </Collapse>
        </Card>
      </Paper>
    </>
  );
};
