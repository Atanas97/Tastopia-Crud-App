import React from "react";

import PageBanner from "../components/PageBanner";
import Wrapper from "../layout/Wrapper";

//Images import
import banner from "../assets/banners/banner1.png";
import faqImg from "../assets/faq.jpg";

const Faq = () => {
    return (
        <>
            <PageBanner banner={banner} title="FAQ " />
            <Wrapper>
                <div className="mx-auto max-w-[85rem] my-20">
                    <div className="grid gap-10 md:grid-cols-2">
                        <div className="">
                            <img
                                src={faqImg}
                                alt="Tastopia faq"
                                width={"100%"}
                                height={"100%"}
                                loading="lazy"
                            />
                        </div>

                        <div>
                            <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
                                <div
                                    className="hs-accordion active pb-3"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-one"
                                >
                                    <button
                                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-textColor transition hover:text-primaryColor md:text-2xl dark:focus:outline-none"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                                    >
                                        Can I cancel at anytime?
                                        <svg
                                            className="hs-accordion-active:hidden block h-5 w-5 flex-shrink-0 text-white group-hover:text-primaryColor"
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
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden h-5 w-5 flex-shrink-0 text-white group-hover:text-primaryColor"
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
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                                    >
                                        <p className="text-textColor">
                                            Yes, you can cancel anytime no
                                            questions are asked while you cancel
                                            but we would highly appreciate if
                                            you will give us some feedback.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="hs-accordion pb-3 pt-6"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-two"
                                >
                                    <button
                                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-white transition hover:text-primaryColor md:text-2xl dark:focus:outline-none"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                                    >
                                        My team has credits. How do we use them?
                                        <svg
                                            className="hs-accordion-active:hidden block h-5 w-5 flex-shrink-0 text-white group-hover:text-primaryColor"
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
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden h-5 w-5 flex-shrink-0 text-white group-hover:text-primaryColor"
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
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                                    >
                                        <p className="text-textColor">
                                            Once your team signs up for a
                                            subscription plan. This is where we
                                            sit down, grab a cup of coffee and
                                            dial in the details.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="hs-accordion pb-3 pt-6"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-three"
                                >
                                    <button
                                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-white transition hover:text-primaryColor md:text-2xl dark:focus:outline-none"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                                    >
                                        How does Preline's pricing work?
                                        <svg
                                            className="hs-accordion-active:hidden block h-5 w-5 flex-shrink-0 text-white group-hover:text-primaryColor"
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
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden h-5 w-5 flex-shrink-0 text-white group-hover:text-primaryColor"
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
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                                    >
                                        <p className="text-textColor">
                                            Our subscriptions are tiered.
                                            Understanding the task at hand and
                                            ironing out the wrinkles is key.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="hs-accordion pb-3 pt-6"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-four"
                                >
                                    <button
                                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-textColor transition hover:text-primaryColor md:text-2xl dark:focus:outline-none"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                                    >
                                        How secure is Preline?
                                        <svg
                                            className="hs-accordion-active:hidden block h-5 w-5 flex-shrink-0 text-white group-hover:text-primaryColor"
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
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden h-5 w-5 flex-shrink-0 text-white group-hover:text-primaryColor"
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
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                                    >
                                        <p className="text-textColor">
                                            Protecting the data you trust to
                                            Preline is our first priority. This
                                            part is really crucial in keeping
                                            the project in line to completion.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="hs-accordion pb-3 pt-6"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-five"
                                >
                                    <button
                                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-white transition hover:text-primaryColor md:text-2xl dark:focus:outline-none"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                                    >
                                        How do I get access to a theme I
                                        purchased?
                                        <svg
                                            className="hs-accordion-active:hidden block h-5 w-5 flex-shrink-0 text-white group-hover:text-primaryColor"
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
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden h-5 w-5 flex-shrink-0 text-white group-hover:text-primaryColor"
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
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                                    >
                                        <p className="text-textColor">
                                            If you lose the link for a theme you
                                            purchased, don't panic! We've got
                                            you covered. You can login to your
                                            account, tap your avatar in the
                                            upper right corner, and tap
                                            Purchases. If you didn't create a
                                            login or can't remember the
                                            information, you can use our handy
                                            Redownload page, just remember to
                                            use the same email you originally
                                            made your purchases with.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="hs-accordion pb-3 pt-6"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-six"
                                >
                                    <button
                                        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-textColor transition hover:text-primaryColor md:text-2xl dark:focus:outline-none"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                                    >
                                        Upgrade License Type
                                        <svg
                                            className="hs-accordion-active:hidden block h-5 w-5 flex-shrink-0 text-gray-600 group-hover:text-primaryColor"
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
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden h-5 w-5 flex-shrink-0 text-gray-600 group-hover:text-primaryColor"
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
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                                    >
                                        <p className="text-textColor">
                                            There may be times when you need to
                                            upgrade your license from the
                                            original type you purchased and we
                                            have a solution that ensures you can
                                            apply your original purchase cost to
                                            the new license purchase.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Faq;
