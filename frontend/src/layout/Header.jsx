import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PathConstants } from "../routes/pathConstants";

//components
import Wrapper from "./Wrapper";

//image imports
import TastopiaLogo from "../assets/svg/tastopia_logo.svg";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    const sendToBookATable = () => {
        navigate("/reservations");
    };
    return (
        <header className="fixed left-0 right-0 top-0 isolate z-10 grow-0 bg-darkColor py-2">
            <Wrapper>
                <div className="flex flex-wrap items-center">
                    <h2 className="mr-auto text-2xl uppercase">
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
                            <span className="inline-block mt-1">Tastopia</span>
                        </Link>
                    </h2>

                    <button
                        className="lg:hidden"
                        type="button"
                        onClick={() => setIsMenuOpen((prevState) => !prevState)}
                    >
                        {isMenuOpen ? (
                            <CgClose size={32} />
                        ) : (
                            <CgMenuRightAlt size={32} />
                        )}
                    </button>

                    <div className="w-full items-center justify-between lg:flex  lg:w-auto">
                        <ul
                            className={`${isMenuOpen ? "block" : "hidden"} my-5 flex-col space-y-2 font-medium lg:my-0 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0`}
                        >
                            <li>
                                <Link className="p-2" to={PathConstants.HOME}>Home</Link>
                            </li>
                            <li>
                                <Link className="p-2" to={PathConstants.MENU}>Menu</Link>
                            </li>
                            <li>
                                <Link className="p-2" to={PathConstants.EVENTS}>Events</Link>
                            </li>
                            <li>
                                <Link className="p-2" to={PathConstants.GALLERY}>Gallery</Link>
                            </li>
                            <li>
                                <Link className="p-2" to={PathConstants.CONTACTUS}>
                                    Contact Us
                                </Link>
                            </li>
                            <button
                                type="button"
                                onClick={() => sendToBookATable()}
                                className="btn bg-primaryColor text-textColor"
                            >
                                Secondary
                            </button>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
