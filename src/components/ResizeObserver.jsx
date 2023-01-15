//this is a wrapper component that rerenders child component when page orientation changes or if provided breakpoints are crossed

import { useEffect, useState } from "react"

const ResizeObserver = ({breakpoints,children}) => {
    const [isLandscape, setIsLandscape] = useState(true);
    const [zone, setZone] = useState(0);

    useEffect(() => {
        function handleResize (e) {
            setIsLandscape(window.innerWidth > window.innerHeight);
            breakpoints && setZone(breakpoints.findIndex(breakpoint => window.innerWidth < breakpoint) || breakpoints.length);
        } 

        const controller = new AbortController();
        window.addEventListener("resize", handleResize, {signal: controller.signal});

        return ()=>{ controller.abort()} 
    },[]);

    return (
        <>
            {children({})}
        </>
    )
}

export default ResizeObserver;