import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AutoScroll = () =>{
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
}

export default AutoScroll;

