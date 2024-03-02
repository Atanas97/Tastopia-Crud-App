import React from "react";
import Wrapper from "../layout/Wrapper";
import { Link } from "react-router-dom";

const SliderElement = ({ slide }) => {
    const { title, text, image, button } = slide;
    return (
        <div className="relative flex h-full items-center justify-center">
            <picture className="block h-full bg-black">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    height={"100%"}
                    width={"100%"}
                    className="min-h-full w-full object-cover opacity-40"
                />
            </picture>
            <Wrapper className="absolute text-center">
                <div className="mx-auto w-full max-w-xl space-y-8">
                    <h1 className="text-5xl font-medium text-white">{title}</h1>
                    <p className="text-xl font-light text-white">{text}</p>
                    <Link className="inline-block border border-white bg-transparent px-8 py-3 capitalize transition duration-300 hover:border-primaryColor hover:bg-primaryColor">
                        {button}
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default SliderElement;
