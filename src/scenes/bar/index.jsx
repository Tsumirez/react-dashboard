import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
    return (
        <>
            <Header title="Bar Chart" subtitle="simple bar chart" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </>
    )
}

export default Bar;