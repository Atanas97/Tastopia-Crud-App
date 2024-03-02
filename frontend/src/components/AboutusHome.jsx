import React from "react";

//Layout import
import Wrapper from "../layout/Wrapper";

//Images imports
import AboutusHomeImg from "../assets/aboutus_home.png";
import utensils from "../assets/svg/cooking/utensils.svg";
import bowl from "../assets/svg/cooking/bowl.svg";

const AboutusHome = () => {
    return (
        <>
            <Wrapper className="my-20 md:my-40">
                <div className="w-full">
                    <div className="grid w-full grid-cols-1 flex-col justify-between gap-8 md:grid-cols-2 lg:flex-row">
                        <div className="card w-full shrink-0">
                            <picture>
                                <img
                                    src={AboutusHomeImg}
                                    alt="Tastopia"
                                    loading="lazy"
                                    width="100%"
                                    height="100%"
                                    className="w-full lg:max-w-lg"
                                />
                            </picture>
                        </div>
                        <div className="space-y-8 text-white lg:text-left">
                            <h4 className="font-['Miniver'] text-primaryColor">
                                About Us
                            </h4>
                            <h1 className="text-5xl font-bold">
                                Enjoy An Exceptional Journey of Taste
                            </h1>
                            <p className="text-lg font-light text-textColor">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when at layout The point of using Ipsum.
                            </p>
                            <div className="md:columns-2">
                                <div className="mb-8 flex items-start gap-2 md:mb-0">
                                    <span className="flex-none">
                                        <img
                                            src={utensils}
                                            alt="Tastopia"
                                            width="64"
                                            height="64"
                                            loading="lazy"
                                        />
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-normal">
                                            Specialist
                                        </h3>
                                        <p className="text-lg font-light text-textColor">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptatum, esse.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="flex-none">
                                        <img
                                            src={bowl}
                                            alt="Tastopia"
                                            width="64"
                                            height="64"
                                            loading="lazy"
                                        />
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-normal">
                                            Restaurant
                                        </h3>
                                        <p className="text-lg font-light text-textColor">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptatum, esse.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-inside list-image-checkmark space-y-3 text-lg font-light text-textColor md:list-outside">
                                <li>
                                    Mauris mattis lectus eget ligula dapibus, ac
                                    maximus ipsum Services
                                </li>
                                <li>
                                    Aenean facilisis erat et metus semper
                                    molestie sem posuere tests
                                </li>
                                <li>
                                    Donec sit amet lorem non mi fringilla
                                    finibus pretium veeconus
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default AboutusHome;
