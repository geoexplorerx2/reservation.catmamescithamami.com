import React, {useEffect, useState} from "react";
import { IS_MOBILE_BREAKPOINTS } from "../components/constants";

const useIsMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    };
    
    useEffect(() => {

        window.addEventListener(
            'resize', 
            handleWindowSizeChange
        );

        return () => {
            window.removeEventListener(
                'resize', 
                handleWindowSizeChange
            );
        }
    }, []);

    return ( width <= IS_MOBILE_BREAKPOINTS );
};


export default useIsMobile;