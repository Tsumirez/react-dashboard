import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";
import { useEffect, useState } from "react";
import ResizeObserver from "./ResizeObserver";

const PieChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log('am being rendered')


    // css handles proper display of things based on screen orientation and size
    // this script just draws the css variables and converts them to js, so chart component can use them

    let bodyElement = document.querySelector("body");
    let bodyStyles = window.getComputedStyle(bodyElement);
    let pieChartLegendOrientation = bodyStyles.getPropertyValue("--pie-chart-legend-orientation")
    let pieChartMarginBottom = parseInt(bodyStyles.getPropertyValue("--pie-chart-margin-bottom"))
    // observer for resize event to force component re-render when orientation changes or mobile breakpoint is crossed



    return (
        <div className="pie-chart">
            <ResponsivePie
                data={data}
                colors={['#390', '#fd3', '#333', '#46a', '#c05', 'rgba(60,10,90,0.7)']}
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
                            fontSize: "calc(.5rem + .5vw)"
                        }
                    }
                }}
                margin={{ top: 0, right: 0, bottom: pieChartMarginBottom, left: 0 }}
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
                enableArcLinkLabels={false}
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
                        direction: pieChartLegendOrientation,
                        justify: false,
                        translateX: 0,
                        translateY: pieChartMarginBottom,
                        itemsSpacing: 10,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: colors.gray[100],
                        itemDirection: "left-to-right",
                        itemOpacity: .85,
                        symbolSize: 18,
                        symbolShape: "circle",
                        symbolBorderColor: colors.gray[200],
                        symbolBorderWidth: 1.5,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1
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