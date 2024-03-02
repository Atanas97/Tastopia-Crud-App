import Wrapper from "../layout/Wrapper";

const PageBanner = ({ title, banner }) => {
    return (
        <div className="relative">
            <picture className="block h-[20rem] lg:h-[30rem]">
                <img
                    src={banner}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                />

                <Wrapper className="absolute inset-0 flex flex-col justify-center">
                    <h1 className="text-5xl capitalize text-white">{title}</h1>
                </Wrapper>
            </picture>
        </div>
    );
};

export default PageBanner;
