import { Divider, Container, Grid, Stack, Typography, Backdrop, CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMachineDetail } from "../../services/RestServices";
import { MachineData } from "./MachineData";
import { MachineDetails } from "./MachineDetails";

export const MachineDetail = () => {
    const { id } = useParams()
    const [machine, setMachine] = useState({});
    const [isLoading, setLoading] = useState(true);


    const fetchMachine = useCallback(() => {
        getMachineDetail(id)
            .then((response) => setMachine(response || {}))
            .finally(() => setLoading(false))
    }, [id])

    useEffect(() => fetchMachine(), [fetchMachine])

    return (
        <Container maxWidth="xl">
            {isLoading ? <></> :
                <Grid
                    container
                    spacing={2}
                    style={{
                        maxWidth: "98%",
                        backgroundColor: "white",
                        margin: "1%",
                        borderRadius: "8px",
                        boxShadow:
                            "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
                        boxSizing: "border-box",
                    }}
                >
                    <Grid item xs={12} style={{ maxWidth: "98%" }}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h6">
                                {machine.description}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                {machine.id}
                            </Typography>
                        </Stack>
                        <Divider />
                    </Grid>
                    <MachineDetails machine={machine} />
                    <MachineData data={machine.data} />
                </Grid>}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    );
}
