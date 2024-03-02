import React from "react";

//gif import
import LoaderGif from "../assets/food_loader.gif";

const Loader = () => {
    return (
        <div className="fixed z-20 inset-0 flex h-full items-center justify-center bg-[#1B1D21]">
            <picture>
                <img
                    src={LoaderGif}
                    alt="Tastopia restaurant"
                    width={"500"}
                    height={"100%"}
                    loading="lazy"
                />
            </picture>
        </div>
    );
};

export default Loader;
