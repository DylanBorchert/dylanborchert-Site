import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Chevron } from "../icons/chevron";
import classNames from "classnames";
import Link from "next/link";

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


function Carousel(props:any) {

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
        if (!sliderRef.current) {
            setHasScrollableArea(false);
        } else {
            setHasScrollableArea(sliderRef.current.scrollWidth > sliderRef.current.clientWidth)
        }
        console.log(props.content)
    }, [sliderPosition]);



    return (
        <div className="font-sans group">
            <div className="h-[160px] overflow-hidden relative">
                <ul
                    ref={sliderRef}
                    onScroll={(ev) => {
                        setSliderPosition(ev.currentTarget.scrollLeft);
                    }}
                    className="flex h-[200px] pb-10 overflow-x-auto sm:snap-x sm:snap-mandatory group/arrows"
                >
                    {props.content.map((slide:any) => (
                        <li
                            className="snap-start snap-always shrink-0 text-white scroll-mx-5 ml-5 py-2 last:mr-5"
                            key={slide.id}
                        >
                            <Link href="/NotFound">
                            <div className="slide-center relative flex flex-col w-[300px]">
                                <div className="bg-black/80 aspect-[4/2] rounded-xl shadow-xl hover:scale-[102%] hover:bg-black transition-all duration-500 hover:cursor-pointer overflow-hidden flex-col flex justify-end">
                                    <div className=" absolute top-0">
                                        <p className=" font-semibold px-2 pt-2">
                                            {slide.attributes.title}
                                        </p>
                                        <p className=" text-xs px-2">
                                            {slide.attributes.summary}
                                        </p>
                                    </div>
                                    {/* <div className=" aspect-[5/3] object-cover realative flex-col justify-center bg-black border-[#101010] border-2">
                                        <p className="font-semibold w-full text-center absolute top-[50%] translate-y-[50%] text-[#101020]">{slide.attributes.title}</p>
                                    </div> */}
                                </div>
                            </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-700 absolute translate-y-[-80px] pl-8 sm:block hidden">
                <button
                    disabled={sliderPosition === 0}
                    onClick={() => goToPreviousSlide()}
                    className={"disabled:opacity-0 scale-90 disabled: w-8 h-8 flex items-center justify-center translate-y-[-50%] hover:scale-110 hover:cursor-pointer transform transition-all duration-500"}
                >
                    <Chevron className="w-3 h-3 text-white" />
                    <div className="w-8 h-8 absolute -z-10 bg-white rounded-full opacity-20"></div>
                    <span className="sr-only">Next slide</span>
                </button>
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-700 absolute right-0 translate-y-[-80px] pr-8 sm:block hidden">
                <button
                    disabled={scrolledToEndOfSlider || currentSlide === props.content.length || !hasScrollableArea}
                    onClick={() => goToNextSlide()}
                    className={"disabled:opacity-0 scale-90 disabled: w-8 h-8 flex items-center justify-center translate-y-[-50%] hover:scale-110 hover:cursor-pointer transform transition-all duration-500"}
                >
                    <Chevron className="rotate-180 w-3 h-3 text-white" />
                    <div className="w-8 h-8 absolute -z-10 bg-white rounded-full opacity-20"></div>
                    <span className="sr-only">Next slide</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel