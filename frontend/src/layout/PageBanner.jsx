import Wrapper from "./Wrapper";

const PageBanner = ({ title, bgImage }) => {
    return (
        <div className="relative">
            <picture className="block h-[40rem] lg:h-[50rem]">
                <img
                    src={bgImage}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </picture>
            <Wrapper>
                <h2 className="text-h2 text-inherit">{title}</h2>
            </Wrapper>
        </div>
    );
};

export default PageBanner;
