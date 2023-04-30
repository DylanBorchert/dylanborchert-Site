import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Chevron } from "../icons/chevron";
import classNames from "classnames";

const slides = [
    {
        title: "Slide 1",
        img: "/slide-img/one-tap.jpeg",
        imageWidth: 343,
        imageHeight: 375,
    },
    {
        title: "Slide 2",
        img: "/slide-img/spatial-audio.jpeg",
        imageWidth: 211,
        imageHeight: 375,
    },
    {
        title: "Slide 3",
        img: "/slide-img/audio-sharing.jpeg",
        imageWidth: 265,
        imageHeight: 352,
        centered: true,
    },
    {
        title: "Slide 4",
        img: "/slide-img/automatic-switching.jpeg",
        imageWidth: 336,
        imageHeight: 100,
        centered: true,
    },
    {
        title: "Slide 5",
        img: "/slide-img/siri.jpeg",
        imageWidth: 168,
        imageHeight: 168,
        centered: true,
    },
    {
        title: "Slide 6",
        img: "/slide-img/a11y.jpeg",
        imageWidth: 135,
        imageHeight: 135,
        centered: true,
    },
    {
        title: "Slide 7",
        img: "/slide-img/one-tap.jpeg",
        imageWidth: 343,
        imageHeight: 375,
    },
    {
        title: "Slide 8",
        img: "/slide-img/spatial-audio.jpeg",
        imageWidth: 211,
        imageHeight: 375,
    },
    {
        title: "Slide 9",
        img: "/slide-img/audio-sharing.jpeg",
        imageWidth: 265,
        imageHeight: 352,
        centered: true,
    }
];

const slideWidth = 300;
const slideMargin = 20;

const scrollToSlide = (slider: HTMLUListElement | null, slideIndex: number) => {
    if (!slider) return;
    slider.scrollTo({
        left: slideIndex * (slideWidth + slideMargin),
        behavior: "smooth",
    });
};


function Carousel () {

    const sliderRef = useRef<HTMLUListElement | null>(null);
    const [sliderPosition, setSliderPosition] = useState(0);

    const currentSlide = useMemo(() => {
        return Math.floor(sliderPosition / (slideWidth + slideMargin));
    }, [sliderPosition]);

    const scrolledToEndOfSlider = useMemo(() => {
        if (!sliderRef.current) return false;
        return (
            sliderRef.current.scrollWidth - sliderRef.current.scrollLeft - sliderRef.current.clientWidth <= 1
        );
    }, [sliderPosition]);

    const goToNextSlide = useCallback(() => {
        scrollToSlide(sliderRef.current, currentSlide + 1);
    }, [currentSlide]);

    const goToPreviousSlide = useCallback(() => {
        scrollToSlide(sliderRef.current, currentSlide - 1);
    }, [currentSlide]);


    return (
        <div className="font-sans py-3">
            <div className="h-[200px] overflow-hidden relative">
                <ul
                    ref={sliderRef}
                    onScroll={(ev) => {
                        setSliderPosition(ev.currentTarget.scrollLeft);
                    }}
                    className="flex h-[240px] pb-10 overflow-x-auto sm:snap-x sm:snap-mandatory"
                >
                    {slides.map((slide) => (
                        <li
                            className="snap-start snap-always shrink-0 mr-5 last:mr-0"
                            key={slide.title}
                        >
                            <div className="slide-center relative flex h-full flex-col bg-black w-[300px] rounded-2xl shadow-lg">

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="absolute w-full translate-y-[-50%] h-[200px] hidden sm:block">
                <div className="flex justify-between absolute w-full translate-y-[-50%] px-2 pb-5">
                    <button
                        disabled={currentSlide === 0}
                        onClick={() => goToPreviousSlide()}
                        className={"disabled:invisible disabled: w-8 h-8 flex items-center justify-center hover:scale-110 transform transition-all duration-500"}
                    >
                        <Chevron className="w-3 h-3 text-white" />
                        <div className="w-8 h-8 absolute -z-10 bg-white rounded-full opacity-20"></div>
                        <span className="sr-only">Next slide</span>
                    </button>
                    <button
                        disabled={scrolledToEndOfSlider || currentSlide === slides.length}
                        onClick={() => goToNextSlide()}
                        className={"disabled:invisible disabled: w-8 h-8 flex items-center justify-center hover:scale-110 transform transition-all duration-500"}
                    >
                        <Chevron className="rotate-180 w-3 h-3 text-white" />
                        <div className="w-8 h-8 absolute -z-10 bg-white rounded-full opacity-20"></div>
                        <span className="sr-only">Next slide</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel