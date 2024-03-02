import Wrapper from "../layout/Wrapper";

const WhereToFindUs = () => {
    return (
        <Wrapper className="my-20 md:my-40">
             <div className="text-center">
            <div className="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16">
                <div className="lg:col-span-5 lg:col-start-1">
                    <div className="mb-8">
                        <h4 className="font-['Miniver'] text-primaryColor">
                            Visit Us
                        </h4>
                        <h2 className="mb-2 text-3xl font-bold text-white lg:text-4xl ">
                            Find Us Locations
                        </h2>
                    </div>
                    <div>
                        <p className="text-xl italic text-textColor">
                            Explore the culinary delights of our restaurant,
                            where unforgettable flavors await
                        </p>
                    </div>
                </div>

                <div className="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        <ul className="grid grid-cols-2 divide-x divide-y divide-gray-200 overflow-hidden">
                            <li className="-m-0.5 flex flex-col p-4 sm:p-6">
                                <h3 className="mb-2 text-3xl font-normal text-white">
                                    France
                                </h3>
                                <address className="text-sm text-textColor sm:text-base">
                                    23 Rue de la Paix, Paris, France
                                </address>
                            </li>

                            <li className="-m-0.5 flex flex-col p-4 sm:p-6">
                                <h3 className="mb-2 text-3xl font-normal text-white">
                                    Italy
                                </h3>
                                <address className="text-sm text-textColor sm:text-base">
                                    15 Via Roma, Rome, Italy
                                </address>
                            </li>

                            <li className="-m-0.5 flex flex-col p-4 sm:p-6">
                                <h3 className="mb-2 text-3xl font-normal text-white">
                                    Spain
                                </h3>
                                <address className="text-sm text-textColor sm:text-base">
                                    8 Calle Gran Vía, Madrid, Spain
                                </address>
                            </li>

                            <li className="-m-0.5 flex flex-col p-4 sm:p-6">
                                <h3 className="mb-2 text-3xl font-normal text-white">
                                    UK
                                </h3>
                                <address className="text-sm text-textColor sm:text-base">
                                    42 High Street, London, UK
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>
    );
};

export default WhereToFindUs;
