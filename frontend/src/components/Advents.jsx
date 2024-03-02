import React from "react";
import { Link } from "react-router-dom";
import { PathConstants } from "../routes/pathConstants";

//Layout
import Wrapper from "../layout/Wrapper";

// Import Images
import column1 from "../assets/column1.png";
import column2 from "../assets/column2.png";
import column3 from "../assets/column3.png";

const Advents = () => {
    return (
        <>
            <Wrapper className="isoslate relative z-[1] -mt-10 mb-20 grid gap-4 md:grid-cols-3">
                <Link to={PathConstants.RESERVATIONS}>
                    <div>
                        <figure className="bg-darkColor">
                            <img
                                src={column1}
                                alt="Tastopia advent"
                                loading="lazy"
                                width={"100%"}
                                height={"100%"}
                                className="animation"
                            />
                            <figcaption className="p-4 text-center text-xl capitalize text-white">
                                Book a Table
                            </figcaption>
                        </figure>
                    </div>
                </Link>
                <Link to={PathConstants.MENU}>
                    <div>
                        <figure className="bg-darkColor">
                            <img
                                src={column2}
                                alt="Tastopia advent"
                                loading="lazy"
                                width={"100%"}
                                height={"100%"}
                                className="animation"
                            />
                            <figcaption className="p-4 text-center text-xl capitalize text-white">
                                Our Menu
                            </figcaption>
                        </figure>
                    </div>
                </Link>
                <Link to={PathConstants.KITCHEN}>
                    <div>
                        <figure className="bg-darkColor">
                            <img
                                src={column3}
                                alt="Tastopia advent"
                                loading="lazy"
                                width={"100%"}
                                height={"100%"}
                                className="animation"
                            />
                            <figcaption className="p-4 text-center text-xl capitalize text-white">
                                Our Kitchen
                            </figcaption>
                        </figure>
                    </div>
                </Link>
            </Wrapper>
        </>
    );
};

export default Advents;
