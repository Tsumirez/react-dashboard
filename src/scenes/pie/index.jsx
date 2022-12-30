import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";

const Pie = () => {
    return (
        <>
            <Header title="Pie chart" subtitle="Simple pie chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </>
    )
}

export default Pie;