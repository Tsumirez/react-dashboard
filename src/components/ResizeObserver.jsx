//this is a wrapper component that rerenders child component when page orientation changes or if provided breakpoints are crossed

import { useState } from "react"

const ResizeObserver = ({breakpoints,children}) => {
    const [isLandscape, setIsLandscape] = useState(true);
    const [zone, setZone] = useState(0);

    function handleResize (e) {
        setIsLandscape(window.innerWidth > window.innerHeight);
        breakpoints && setZone(breakpoints.findIndex(breakpoint => window.innerWidth < breakpoint) || breakpoints.length);
    } 

    window.addEventListener("resize", handleResize);

    return (
        <>
            {children({})}
        </>
    )
}

export default ResizeObserver;