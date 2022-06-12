import { Grid, Typography, Stack, Divider, Chip } from "@mui/material";
import { useMemo } from "react";

export const MachineDetails = ({ machine }) => {

    const moving = useMemo(() => machine.moving ? 'En movimiento' : 'Parado', [machine.moving])
    const chipColor = useMemo(() => machine.moving ? "#278e06" : "#e13e5b", [machine.moving])


    return (
        <Grid item xs={12} md={4}>
            <Stack sx={{ flexDirection: 'column', alignContent: 'space-arround' }}>
                <Grid container xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h7" component='h3'></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h7" component='h3'>Empresa</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h8">{machine.company}</Typography>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                        <Typography variant="h7" component='h3'>Clase</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h8">{machine.class}</Typography>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                        <Typography variant="h7" component='h3'>Estado</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Chip style={{ backgroundColor: chipColor, color: 'white', fontSize: 18, fontWeight: 'bold' }} label={moving} />
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                        <Typography variant="h7" component='h3'>Ultima Actualizacion</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h8">{machine.last_update}</Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Grid>
    );
}
