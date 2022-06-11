import { CardActionArea, CardHeader, Chip, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useMemo, useCallback } from "react";

export const MachineCard = ({ machine }) => {
  // const [isStockDialogOpen, setStockDialogOpen] = React.useState(false);

  const handleCardAction = useCallback(() => {
    // setStockDialogOpen(true)
  }, []);

  const closeDialog = useCallback(() => {
    // setStockDialogOpen(false)
  }, []);

  const chipColor = useMemo(() => machine.working ? "#278e06" : "#e13e5b", [machine.working])
  const chipLabel = useMemo(() => machine.working ? "En movimiento" : "Parada", [machine.working])

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
        <CardActionArea onClick={handleCardAction}>
          {/* <CardHeader
                    avatar={<Avatar sx={{ bgcolor: "#e4e4e4" }}>
                        m
                    </Avatar>}
                    title={''} /> */}
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
