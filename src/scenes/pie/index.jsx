import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";
import ResizeObserver from "../../components/ResizeObserver";

const Pie = () => {
    return (
        <>
            <Header title="Pie chart" subtitle="Simple pie chart" />
            <Box height="75vh">
                <ResizeObserver>
                    {() => <PieChart />}
                </ResizeObserver>
            </Box>
        </>

    )
}

export default Pie;