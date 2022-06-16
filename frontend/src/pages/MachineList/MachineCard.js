import { CardActionArea, Chip, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export const MachineCard = ({ machine }) => {

  const chipColor = useMemo(() => machine.working ? "#278e06" : "#e13e5b", [machine.working])

  return (
    <>
      <Card
        sx={{
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardActionArea component={Link} to={`/machines/${machine.id}`}>
          <CardContent
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid container>
              <Grid item sm={1}>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  alignContent="center"
                >
                  {machine.id}
                </Typography>
              </Grid>
              <Grid item sm={10}>
                <Typography variant="h5">{machine.description}</Typography>
              </Grid>
              <Grid item sm={1}>
                <Chip style={{ backgroundColor: chipColor }} />
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
