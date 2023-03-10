import { useEffect } from "react";
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    let bodyElement = document.querySelector("body");
    let bodyStyles = window.getComputedStyle(bodyElement);
    let barChartMarginLeft = parseInt((bodyStyles.getPropertyValue("--bar-chart-margin-left")));
    let barChartMarginRight = parseInt((bodyStyles.getPropertyValue("--bar-chart-margin-right")));
    console.log(barChartMarginLeft);

    useEffect(() => {
        console.log("change");
    });

    return (
        <div class="bar-chart">
            <ResponsiveBar
                data={data}
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
                        },
                    },
                    grid: {
                        line: {
                            stroke: colors.gray[600]
                        }
                    },
                    tooltip: {
                        container: {
                            color: "#a37"
                        }
                    }
                }}
                keys={["Playstation", "Xbox", "Nitendo", "PC", "Accessories"]}
                indexBy="quarter"
                margin={{ top: 50, right: barChartMarginRight, bottom: 50, left: barChartMarginLeft }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "pink_yellowGreen" }}
                borderWidth="1"
                borderColor="#333"
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "#38bcb2",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "#eed312",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}

                groupMode="stacked"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? undefined : "Quarter", // changed
                    legendPosition: "middle",
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? undefined : "Game Sales", // changed
                    legendPosition: "middle",
                    legendOffset: -40,
                }}
                enableLabel={true}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                }}
                legends={
                    isDashboard ? [] :
                    [
                        {
                            dataFrom: "keys",
                            anchor: "bottom-right",
                            direction: "column",
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: "left-to-right",
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            symbolBorderWidth: 1,
                            symbolBorderColor: colors.gray[100],

                            effects: [
                                {
                                    on: "hover",
                                    style: {
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        }
                        ,
                    ]}
                role="application"
                barAriaLabel={function (e) {
                    return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
                }}
            />
        </div>
    );
};

export default BarChart;