import React from "react";
import { useLocation } from "react-router-dom";

//Component imports
import Wrapper from "../layout/Wrapper";
import PageBanner from "../components/PageBanner";

//Images import
import banner from "../assets/banners/banner1.png";

const Event = () => {
    const location = useLocation();
    const locationProps = location.state;

    return (
        <>
            <PageBanner banner={banner} title={locationProps.title} />
            <Wrapper className='my-20'>
                <div>{locationProps.title}</div>
                <div>{locationProps.description}</div>
            </Wrapper>
        </>
    );
};

export default Event;
