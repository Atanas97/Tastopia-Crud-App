import React from "react";
import { Link } from "react-router-dom";
import { PathConstants } from "../routes/pathConstants";

//Components import
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageBanner from "../components/PageBanner";

//Image imports
import banner from "../assets/banners/banner1.png";

const Page404 = () => {
    return (
        <>
            <Header />
            <PageBanner banner={banner} title="Not found " />
            <div className="my-20 grow text-center">
                <h1 className="block text-7xl font-bold text-primaryColor sm:text-9xl dark:text-white">
                    404
                </h1>
                <h1 className="block text-2xl font-bold text-white"></h1>
                <p className="mt-3 text-xl text-textColor">
                    Oops, something went wrong.
                </p>
                <p className="text-xl text-textColor">
                    Sorry, we couldn't find your page.
                </p>
                <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
                    <Link
                        to={PathConstants.HOME}
                        className="btn inline-flex items-center bg-primaryColor px-8 py-4"
                    >
                        <svg
                            className="h-4 w-4 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Back to examples
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Page404;
