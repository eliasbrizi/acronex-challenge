import { Container, Grid, Backdrop, CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMachines } from "../../services/RestServices";
import { MachineCard } from "./MachineCard";

export const MachinesList = () => {

  const [list, setList] = useState([]);
  const [searchParams] = useSearchParams()
  const [isLoading, setLoading] = useState(true)

  const fetchMachines = useCallback(() => {
    getMachines(searchParams.get('search') || '')
      .then((data) => setList(data || []))
      .finally(() => setLoading(false))
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};
