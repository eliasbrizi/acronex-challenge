import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

export const MachineData = ({ data }) => {
    const [dataList, setDataList] = useState([])
    useEffect(() => { if (data) setDataList(Object.values(data)) }, [data])

    return (
        <Grid container xs={12} md={6}>
            {dataList.map((item, index) => { return Object.keys(data)[index] })}
        </Grid>
    );
}
