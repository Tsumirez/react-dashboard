import { useState, useEffect } from "react"

const ResizeObserver = ({children}) => {
    const [isLandscape, setIsLandscape] = useState(true);

    useEffect(() => {
        function handleResize (e) {
            setIsLandscape(window.innerWidth > window.innerHeight);
        } 

        window.addEventListener("resize", handleResize);
    },[isLandscape])

    return (
        <>
            {children({})}
        </>
    )

    
}

export default ResizeObserver;