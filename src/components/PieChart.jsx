import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div class="pie-chart">
            <ResponsivePie
                data={data}
                // ['#002d6e','#40a','#71b', '#a29', '#c07']
                //['#390','#fd3','#333', '#46a', '#c05']
                colors={['#390', '#fd3', '#333', '#46a', '#c05']}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.gray[100],
                            },
                        },
                        legend: {
                            text: {
                                fill: colors.gray[100],
                            },
                        },
                        ticks: {
                            line: {
                                stroke: colors.gray[100],
                                strokeWidth: 1,
                            },
                            text: {
                                fill: colors.gray[100],
                            },
                        },
                    },
                    legends: {
                        text: {
                            fill: colors.gray[100],
                        }
                    },
                    tooltip: {
                        container: {
                            color: "#333"
                        }
                    },
                    legends: {
                        text: {
                            fontSize: "1rem"
                        }
                    }
                }}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.9}
                padAngle={2}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                // borderColor={{
                //     from: "color",
                //     modifiers: [["darker", 0.2]],
                // }}
                borderColor="black"
                borderWidth="1.5"
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={colors.gray[100]}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={colors.gray[100]}
                enableArcLabels={false}
                arcLabelsRadiusOffset={0.4}
                arcLabelsSkipAngle={7}
                arkLabelsTextSize="20px"
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                }}
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                legends={[
                    {
                        anchor: "bottom",
                        direction: "row",
                        justify: false,
                        translateX: 0,
                        translateY: 80,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: colors.gray[100],
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: "circle",
                        symbolBorderColor: colors.gray[200],
                        symbolBorderWidth: 1.5,
                        effects: [
                            {
                                on: "hover",
                                text: {
                                    fontSize: "2rem",
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    )
};

export default PieChart;