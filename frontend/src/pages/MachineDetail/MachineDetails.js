import { Grid, Typography, Stack } from "@mui/material";
export const MachineDetails = ({ machine }) => {
    return (
        <Grid item xs={12} md={4}>
            <Stack sx={{ flexDirection: 'column', alignContent: 'space-arround' }}>
                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h7" component='h3'>Empresa</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h8">{machine.company}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h7" component='h3'>Clase</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h8">{machine.class}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h7" component='h3'>Estado</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h8">{machine.moving ? 'en movimiento' : 'kieto'}</Typography>
                    </Grid>
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
