import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HSStaticMethods } from "preline";

const Preline = () => {
    const location = useLocation();

    useEffect(() => {
        import("preline/preline");
    }, []);

    useEffect(() => {
        // @ts-ignore
        HSStaticMethods.autoInit();
    }, [location.pathname]);

    return <></>;
};

export default Preline;
