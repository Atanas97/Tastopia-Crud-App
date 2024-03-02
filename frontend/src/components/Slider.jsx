// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Images
import slider1 from "../assets/slider/slider1.webp";
import slider2 from "../assets/slider/slider2.webp";
import slider3 from "../assets/slider/slider3.webp";
import SliderElement from "./SliderElement";

const SliderData = [
    {
        id: 1,
        image: slider1,
        title: "Homestyle Italian cooking enjoyed with family",
        text: "Mistaken Idea of Denouncing Pleasure and Praising Pain",
        button: "Read More",
    },
    {
        id: 2,
        image: slider2,
        title: "Enjoy the real fresh food from our Cuisines",
        text: "Mistaken Idea of Denouncing Pleasure and Praising Pain",
        button: "Read More",
    },
    {
        id: 3,
        image: slider3,
        title: "The Best Food For The Best Moments",
        text: "Mistaken Idea of Denouncing Pleasure and Praising Pain",
        button: "Read More",
    },
];

const Slider = () => {
    const mappedSlides = SliderData.map((slide) => (
        <SwiperSlide key={slide.id}>
            <SliderElement slide={slide} />
        </SwiperSlide>
    ));

    return <Swiper className="h-[calc(100vh_-_80px)]" loop>{mappedSlides}</Swiper>;
};

export default Slider;
