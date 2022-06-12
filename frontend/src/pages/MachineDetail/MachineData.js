import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { DataCard } from "./DataCard";

export const MachineData = ({ data }) => {
    const [dataList, setDataList] = useState([])
    useEffect(() => { if (data) setDataList(Object.values(data)) }, [data])

    return (
        <Grid container xs={12} md={8} spacing={2} padding={2}>
            {dataList.map((item, index) => <DataCard data={item} title={Object.keys(data)[index]} />)}
        </Grid>
    );
}
