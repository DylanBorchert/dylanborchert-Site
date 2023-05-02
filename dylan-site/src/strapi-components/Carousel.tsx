import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Chevron } from "../icons/chevron";
import classNames from "classnames";

const slides = [
    {
        title: "Slide 1",
        imageWidth: 343,
        imageHeight: 375,
    },
    {
        title: "Slide 2",
        imageWidth: 211,
        imageHeight: 375,
    },
    {
        title: "Slide 3",
        imageWidth: 211,
        imageHeight: 375,
    },
    {
        title: "Slide 4",
        imageWidth: 211,
        imageHeight: 375,
    },
    {
        title: "Slide 5",
        imageWidth: 211,
        imageHeight: 375,
    },
    {
        title: "Slide 6",
        imageWidth: 211,
        imageHeight: 375,
    },
    {
        title: "Slide 7",
        imageWidth: 211,
        imageHeight: 375,
    },
];

const slideWidth = 300;
const slideMargin = 40;

const scrollToSlide = (slider: HTMLUListElement | null, slideIndex: number) => {
    console.log(slider);
    console.log(slideIndex);
    if (!slider) return;
    slider.scrollTo({
        left: slideIndex * (slideWidth + slideMargin),
        behavior: "smooth",
    });
};


function Carousel() {

    const sliderRef = useRef<HTMLUListElement | null>(null);
    const [sliderPosition, setSliderPosition] = useState(0);
    const [hasScrollableArea, setHasScrollableArea] = useState(false);

    const currentSlide = useMemo(() => {
        return Math.ceil(sliderPosition / (slideWidth + slideMargin));
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

    const handleResize = useCallback(() => {
        if (!sliderRef.current) return;
        setHasScrollableArea(sliderRef.current.scrollWidth > sliderRef.current.clientWidth);
    }, []);


    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        console.log(sliderPosition);

        if (!sliderRef.current) {
            setHasScrollableArea(false);
        } else {
            setHasScrollableArea(sliderRef.current.scrollWidth > sliderRef.current.clientWidth)
        }
    }, [sliderPosition]);



    return (
        <div className="font-sans group">
            <div className="h-[200px] overflow-hidden relative">
                <ul
                    ref={sliderRef}
                    onScroll={(ev) => {
                        setSliderPosition(ev.currentTarget.scrollLeft);
                    }}
                    className="flex h-[240px] pb-10 overflow-x-auto sm:snap-x sm:snap-mandatory group/arrows"
                >
                    {slides.map((slide) => (
                        <li
                            className="snap-start snap-always shrink-0 text-white scroll-mx-5 ml-5 last:mr-5"
                            key={slide.title}
                        >
                            <div className="slide-center relative flex h-full flex-col bg-black w-[300px] rounded-2xl shadow-lg">

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="absolute w-full translate-y-[-100%] h-[100px] hidden sm:block opacity-0 group-hover:opacity-100 duration-700">
                <div className="flex justify-between absolute w-full translate-y-[-50%] px-2 pb-3">
                    <button
                        disabled={sliderPosition === 0}
                        onClick={() => goToPreviousSlide()}
                        className={"disabled:opacity-0 scale-90 disabled: w-8 h-8 flex items-center justify-center hover:scale-110 transform transition-all duration-500"}
                    >
                        <Chevron className="w-3 h-3 text-white" />
                        <div className="w-8 h-8 absolute -z-10 bg-white rounded-full opacity-20"></div>
                        <span className="sr-only">Next slide</span>
                    </button>
                    <button
                        disabled={scrolledToEndOfSlider || currentSlide === slides.length || !hasScrollableArea}
                        onClick={() => goToNextSlide()}
                        className={"disabled:opacity-0 scale-90 disabled: w-8 h-8 flex items-center justify-center hover:scale-110 transform transition-all duration-500"}
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