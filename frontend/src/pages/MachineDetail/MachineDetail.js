import { useParams } from "react-router-dom";

export const MachineDetail = () => {
    const { id } = useParams()

    return (
        <>{id}</>

    );
}
