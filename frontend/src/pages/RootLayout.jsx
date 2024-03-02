import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Loader from "../components/Loader";
import Preline from "../components/Preline";

const RootLayout = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Preline />
                <Header />
                <main className="grow pt-20">
                    <Outlet />
                </main>
                <Footer />
            </Suspense>
        </>
    );
};

export default RootLayout;
