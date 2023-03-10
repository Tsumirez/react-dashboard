import { Box } from "@mui/material";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
{/* <Box
gridColumn="span 3"
backgroundColor={colors.primary[400]}
display="flex"
alignItems="center"
justifyContent="center">
<StatBox
  title="4,801"
  subtitle="Sales"
  progress="0.4"
  increase="+10%"
  icon={
    <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
  }
/>
</Box> */}

const Panel = ({ rowspan=1, children }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box className="small-panel"
             backgroundColor={colors.primary[400]}
        >{children}</Box>
    )
}

export default Panel