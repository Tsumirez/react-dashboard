import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined"
import EmailIcon from "@mui/icons-material/Email"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import TrafficIcon from "@mui/icons-material/Traffic"
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import WorldMapChart from "../../components/WorldMapChart";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import Panel from "../../components/Panel";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box display='flex' justifyContent='space-between' alignItems='center' className="dashboard-header">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.gray[100],
              fontSize: "0.875rem",
              fontWeight: "bold",
              padding: "10px 20px"
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* GRID & CHARTS */}

      <Box id="dashboard-panels">
        {/* ROW 1 */}
        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox
            title="14,672"
            subtitle="Email sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Box> */}

        <Panel class="small-panel">
          <StatBox
            title="14,672"
            subtitle="Email sent"
            progress="0.75"
            increase="+14%"
            icon={
             <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Panel>

        <Panel colspan="3" class="small-panel">
          <StatBox
            title="4,801"
            subtitle="Sales"
            progress="0.4"
            increase="+10%"
            icon={
              <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Panel>

        <Panel colspan="3"  class="small-panel">
          <StatBox
            title="780"
            subtitle="New Clients"
            progress="0.15"
            increase="+10"
            icon={
              <PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Panel>

        <Panel colspan="3"  class="small-panel">
          <StatBox
            title="331,900"
            subtitle="Trafic inbound"
            progress="0.8"
            increase="+20%"
            icon={
              <TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Panel>



        {/* ROW 2 */}

        <Box className="big-panel grow"
           backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.gray[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                $120,000
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" mt="-20px" width="100%">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* TRANSACTIONS */}

        <Box
          backgroundColor={colors.primary[400]}
          className="transactions-panel"
          >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.gray[500]}
            p="15px"
          >
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId} - {i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.gray[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.gray[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px" borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}

        <Box
          className="medium-panel"
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5" fontWeight="600">Campaign</Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
              28,780
            </Typography>
            <Typography>
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>

        <Box
          className="medium-panel grow"
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5" fontWeight="600">Sales Quantity</Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          className="medium-panel grow"
          backgroundColor={colors.primary[400]}

        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>Geography Based Traffic</Typography>
          <Box height="200px">
            <WorldMapChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard