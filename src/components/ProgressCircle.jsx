import { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import './ProgressCircle.css';

const ProgressCircle = ({ progress = "0.55", size = "40" }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;
    let [animation,setAnimation] = useState("false");
    useEffect(() => {
        setAnimation("true");
    }
    ,[])

    return (
        <svg viewBox="0 0 100 100" class="radial-progress-svg sp75" style={{"--progress": progress}} height={size} width={size} active={animation}>
            <defs>
                <clipPath id="ring" clipPathUnits="objectBoundingBox">
                    <path clip-rule="evenodd"
                        d="M 0.5 .1 a 0.4 0.4 0 0 1 0 0.8 a 0.4 0.4 0 0 1 0 -0.8 M 0.5 0 a 0.5 0.5 0 0 1 0 1 a 0.5 0.5 0 0 1 0 -1" />
                </clipPath>
            </defs>

            <foreignObject x="0" y="0" width="100" height="100" clip-path="url(#ring)">
                <div></div>
            </foreignObject>
            <path d="M 50 0 a 50 50 0 0 0 0 100 a 50 50 0 0 0 0 -100" class="progress-bar"></path>
            <path d="M 50 10 a 40 40 0 0 0 0 80 a 40 40 0 0 0 0 -80" stroke-width="2" stroke="black"></path>
            <path d="M 50 0 a 50 50 0 0 0 0 100 a 50 50 0 0 0 0 -100" stroke-width="4" stroke="black"></path>
        </svg>
    )
}

export default ProgressCircle