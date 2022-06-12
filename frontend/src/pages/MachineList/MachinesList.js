import { Box, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { MachineCard } from "./MachineCard";
import { getMachines } from "../../services/RestServices";
import { useSearchParams } from "react-router-dom";

export const MachinesList = () => {
  const [list, setList] = useState([]);
  const [searchParams] = useSearchParams()


  const fetchMachines = useCallback(() => {
    getMachines(searchParams.get('search')).then((data) => setList(data))
  }, [searchParams]);

  useEffect(() => fetchMachines(), [fetchMachines]);

  return (
    <Container
      maxWidth="lg"
      style={{
        backgroundColor: "white",
        marginTop: "5%",
      }}
    >
      <Grid container spacing={2}>
        {list.map((machine) => (
          <Grid item key={machine.id} xs={12}>
            <MachineCard machine={machine} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
