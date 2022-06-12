import { CardHeader, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useMemo } from "react";

export const DataCard = ({ data, title }) => {

    const dataList = useMemo(() => { return Object.values(data) }, [data])

    return (
        <Grid item>
            <Card
                sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CardHeader title={title} sx={{ backgroundColor: "#e4e4e4", textAlign: "center" }} />
                <CardContent
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        // textAlign: "center",
                    }}
                >
                    <Grid container spacing={2}>
                        {dataList.map((value, index) => {
                            return (<>
                                <Grid item sx={{ textAlign: 'right' }} xs={12} sm={6}>
                                    <Typography variant='h6'>

                                        {Object.keys(data)[index]}
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ textAlign: 'left', marginTop: 0.7 }} xs={12} sm={6}>
                                    <Typography>
                                        {value}
                                    </Typography>
                                </Grid>
                            </>
                            )
                        })}
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};
