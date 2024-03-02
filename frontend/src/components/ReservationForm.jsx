import React from "react";
import Wrapper from "../layout/Wrapper";

const ReservationForm = () => {
    return (
        <>
            <Wrapper className="my-20 md:my-40">
                <div className="text-center">
                    <h4 className="mb-1 font-['Miniver'] text-primaryColor">
                        MAKE A RESERVE
                    </h4>
                    <h2 className="mb-6 text-4xl">Book A Table On Time</h2>
                </div>
                <form>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-white bg-transparent px-4 py-3 font-light text-textColor focus:border-primaryColor focus:outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Your phone"
                                className="w-full border border-white bg-transparent px-4 py-3 font-light text-textColor focus:border-primaryColor focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div>
                            <input
                                type="text"
                                placeholder="People"
                                className="w-full border border-white bg-transparent px-4 py-3 font-light text-textColor focus:border-primaryColor focus:outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="date"
                                placeholder="Your phone"
                                className="w-full border border-white bg-transparent px-4 py-3 font-light text-textColor focus:border-primaryColor focus:outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Time"
                                className="w-full border border-white bg-transparent px-4 py-3 font-light text-textColor focus:border-primaryColor focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <button
                            type="submit"
                            className="inline-block border border-white bg-transparent px-8 py-4 capitalize transition duration-300 hover:border-primaryColor hover:bg-primaryColor"
                        >
                            Book table
                        </button>
                    </div>
                </form>
            </Wrapper>
        </>
    );
};

export default ReservationForm;
