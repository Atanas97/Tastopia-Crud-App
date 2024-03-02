import React from "react";

//Component imports
import Slider from "../components/Slider";
import Advents from "../components/Advents";
import AboutusHome from "../components/AboutusHome";
import SelectedMenu from "../components/SelectedMenu";

const Homepage = () => {
    return (
        <>
            <Slider />
            <Advents />
            <AboutusHome />
            <SelectedMenu />
        </>
    );
};

export default Homepage;
