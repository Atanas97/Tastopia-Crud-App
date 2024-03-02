import React from "react";
import { twMerge } from "tailwind-merge";


const Wrapper = ({ children, className }) => {
    return (
        <section className={twMerge(`mx-auto w-full max-w-screen-xl px-5`, className)}>
            {children}
        </section>
    );
};

export default Wrapper;
