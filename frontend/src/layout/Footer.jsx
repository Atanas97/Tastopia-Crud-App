import React from "react";
import { Link } from "react-router-dom";
import { PathConstants } from "../routes/pathConstants";

import Wrapper from "./Wrapper";

//Images import
import TastopiaLogo from "../assets/svg/tastopia_logo.svg";

const Footer = () => {
    return (
        <footer className="grow bg-darkColor">
            <Wrapper className="mt-10">
                <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link
                            to={PathConstants.HOME}
                            className="flex items-center gap-3"
                        >
                            <img
                                src={TastopiaLogo}
                                alt="Tastopia"
                                loading="lazy"
                                width={64}
                                height={64}
                            />
                            <span className="mt-1 inline-block text-3xl uppercase">
                                Tastopia
                            </span>
                        </Link>
                        <p className="mt-3 text-textColor">
                            Experience culinary excellence at Tastopia, where
                            global flavors meet local ingredients in every dish.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-3xl font-semibold uppercase text-white">
                            Product
                        </h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p>
                                <a
                                    className="text-lg font-light text-textColor hover:text-primaryColor"
                                    href="#"
                                >
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a
                                    className="text-lg font-light text-textColor hover:text-primaryColor"
                                    href="#"
                                >
                                    Changelog
                                </a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-3xl font-semibold uppercase text-white">
                            Company
                        </h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p>
                                <a
                                    className="text-lg font-light text-textColor hover:text-primaryColor"
                                    href="#"
                                >
                                    About us
                                </a>
                            </p>
                            <p>
                                <a
                                    className="text-lg font-light text-textColor hover:text-primaryColor"
                                    href="#"
                                >
                                    Blog
                                </a>
                            </p>
                            <p>
                                <a
                                    className="text-lg font-light text-textColor hover:text-primaryColor"
                                    href="#"
                                >
                                    Careers
                                </a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-3xl font-semibold uppercase text-white">
                            Working Hours
                        </h4>

                        <ul className="mt-3 space-y-2">
                            <li className="flex border-b border-textColor pb-1 justify-between gap-2 text-lg font-light text-textColor">
                                <span>Mon - Fri</span>
                                <span>09.00 am - 10.00 pm</span>
                            </li>
                            <li className="flex border-b border-textColor pb-1 justify-between gap-2 text-lg font-light text-textColor">
                                <span>Sat</span>
                                <span>07.00am - 08.00pm</span>
                            </li>
                            <li className="flex border-b border-textColor pb-1 justify-between gap-2 text-lg font-light text-textColor">
                                <span>Sun</span>
                                <span>9:00 am - 8 Pm</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;
