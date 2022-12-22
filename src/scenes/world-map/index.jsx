import WorldMapChart from '../../components/WorldMapChart';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";


const WorldMap = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="World Map Chart" subtitle="Poland could do better..as always" />
            <Box height="75vh" border={`1px solid ${colors.gray[100]}`} borderRadius="4px">
                <WorldMapChart />
            </Box>
        </Box>
    )
}

export default WorldMap