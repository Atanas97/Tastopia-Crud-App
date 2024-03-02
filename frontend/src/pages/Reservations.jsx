import React from "react";

//Component import
import PageBanner from "../components/PageBanner";
import ReservationForm from "../components/ReservationForm";
import WhereToFindUs from "../components/WhereToFindUs";

//Images import
import banner from "../assets/banners/banner1.png";

const Reservations = () => {
    return (
        <>
            <PageBanner banner={banner} title="Book a table" />
            <ReservationForm />
            <WhereToFindUs />
        </>
    );
};

export default Reservations;
