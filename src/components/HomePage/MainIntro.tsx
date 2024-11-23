import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import { useEffect, useState } from "react";
import Tooltip from "../Breadcrumbs/Tooltip";
import { getCarouselImagesAPI } from "../../Services/InteractionsAPI";

function MainInro() {
    const [news] = useState("Our Site is under construction. Sorry for the inconvinience");
    const [sliderImages, setSliderImages] = useState([
        "/images/carousel1.webp",
        "/images/carousel2.webp",
        "/images/carousel3.webp",
        "/images/carousel4.webp",
    ])

    const banner = "/images/Banner.jpg";
    // const videoBanner = "/videos/videoBanner.mp4"
    const principal = "/images/Principal.jpg";
    const principalVideo = "/videos/PrincipalSpeech.mp4"

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    useEffect(() => {
        getImages();
    }, [])

    const getImages = async () => {
        try {
            const response = await getCarouselImagesAPI();
            if (response?.data) {
                alert("result received");
                setSliderImages(response?.data?.url);
                console.log(response);
            } else {
                // alert("Error")
            }

        } catch (error) {
            console.log((error as Error).message);
        }
    }

    return (
        <>
            <section className="container-fluid relative -mt-28 -z-40">
                {/* Banner image */}
                <img className="w-full" src={banner} alt="LORD'S ACADEMY Banner" />

                <div className="relative w-full overflow-hidden hidden" style={{ paddingTop: '56.25%' }}>
                    {/* Responsive YouTube iframe container */}
                    {/* <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/fIaxgppSi2c?autoplay=1&mute=1&loop=1&playlist=fIaxgppSi2c&controls=0&showinfo=0&modestbranding=1"
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    /> */}

                    {/* static video banner */}
                    {/* <div className="absolute top-0 left-0 w-full h-full">
                        <video className="video 3xl:mx-auto" src={videoBanner} autoPlay muted loop controls style={{ width: '100%' }} >
                            *Your browser does not support playing video.
                        </video>
                    </div> */}
                </div>
            </section>
            <div className="w-full bg-violetTxt/80 text-white py-0.5 font-semibold overflow-hidden">
                <div className="flex">
                    <button className="px-2 lg:px-3 2xl:px-4 bg-violetBg z-50">Announcement</button>
                    <div className="animate-marquee whitespace-nowrap z-40">
                        {news}
                    </div>
                </div>
            </div>

            <div className="absolute w-[180px] p-2 font-semibold top-[5vh] md:top-[8vh] xl:top-[10vh] lg:start-20 z-50">
                <div className="flex flex-col justify-center w-full items-center">
                    <img className="w-12 lg:w-20 zoomEffect" src="/images/logo.png" alt="Lord's Academy Logo" />
                    <h2>LORD'S ACADEMY</h2>

                    <div className="hidden flex-col items-center md:flex opacity-70 z-50">

                        <button className="mt-12 lg:mt-20 xl:mt-24 2xl:mt-44 me-4 w-[90px] text-sm border-b text-end border-black transform -rotate-90 mb-12">Follow us</button>

                        <a href="https://www.facebook.com" target="_blank" className='p-1 md:p-0 mb-1'>
                            <img className='h-8 zoomEffect' src="/icons/facebook_outline.png" alt="Facebook" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" className='p-1 md:p-0 mb-1'>
                            <img className='h-8 zoomEffect' src="/icons/youtube_outline.png" alt="youtube" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className='p-1 md:p-0 mb-1'>
                            <img className='h-8 zoomEffect' src="/icons/instagram_outline.png" alt="Instagram" />
                        </a>
                        <a href="https://twitter.com" target="_blank" className='p-1 md:p-0 mb-1'>
                            <img className='h-8 zoomEffect' src="/icons/twitter_outline.png" alt="Twitter" />
                        </a>

                        <div className="flex mt-2">
                            {/* <div className="bg-white absolute px-2 w-[200px] text-center rounded hover:zoomEffect">0480-2760322 | 2763771</div> */}
                            <Tooltip text="0480-2760322, 2763771">
                                <a href="tel:+914802760322" target='_blank' className="mx-1 px-0.5 h-10 mb-2 cursor-pointer zoomEffect"><span className="material-symbols-outlined"> call </span></a>
                            </Tooltip>
                            <a href="https://maps.app.goo.gl/u8NJLErYGpDP77c87" target="_blank" className="mx-1 px-0.5 h-10 mb-2 cursor-pointer zoomEffect"><span className="material-symbols-outlined"> location_on </span></a>
                            <a className="mx-1 px-0.5 h-10 mb-2 cursor-pointer zoomEffect"><span className="material-symbols-outlined"> search </span></a>
                        </div>
                    </div>

                </div>
            </div>



            <section id="banner" className="sm:flex justify-center sm:flex-row items-center gap-8">
                <div className="sm:w-[45%] flex">
                    <div className="mx-auto px-2">
                        <div className="flex items-center mt-10">
                            <div className="h-36 border-e-2 border-violetTxt py-10">
                                <p className="font-semibold px-2 text-center">WELCOME TO</p>
                            </div>
                            <h2 className="max-w-md text-3xl font-bold sm:text-4xl text-left text-violetTxt px-2">
                                LORD'S ACADEMY
                            </h2>
                        </div>

                        <p className="max-w-md my-4 text-left text-slate-700 px-2">
                            Lord’s Academy is an English Medium School, following the Indian Certificate of Secondary Education
                            (ICSE Syllabus) , an internationally accepted system of education. The school is run by Lord’s Academy
                            Education &amp; Charitable Trust (568/IV/SRO/EKM/2005), formed by the CMI Fathers of I.H. Monastery,
                            Varandarappilly. Lord’s Academy and Kindergarten symbolize the CMI’s relentless quest for excellence in
                            education and are the realization of the long-cherished dreams of many people who aspire for holistic
                            education.
                        </p>
                    </div>

                </div>

                {/* Carousel Section */}
                <div className="w-[94%] sm:w-[44%]">
                    <Slider {...sliderSettings}>
                        {sliderImages.map((image, index) => (
                            <div className="w-full h-[200px] sm:h-[450px]" key={index}>
                                <img className="object-cover w-full h-full lg:w-[90%]" src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section className="container-fluid bg-[#b1b0de] pt-5 md:pt-10">

                <UpcomingEvents />

                <div className="bg-violetBg py-5 md:py-0">

                    <div className="sm:flex justify-center sm:flex-row items-center gap-8 sm:gap-0">

                        <div className="flex flex-col mb-8 sm:mb-0">
                            <div className="sm:max-w-[600px]">
                                <img className="object-contain w-full mx-auto px-10 sm:px-0" src={principal} alt="principal" />
                                <p className="text-center lg:text-2xl font-bold relative -mt-10 lg:-mt-12 bg-violet-900/60 mx-10 sm:mx-0 py-2 text-white">Fr. JOSE KIDANGAN CMI</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mx-4 sm:mx-0 max-w-[600px]">
                                <h5 className="mb-2 font-semibold text-xl 2xl:text-2xl text-gray-50 sm:p-6">Principal's Message</h5>
                                <video className="video 3xl:mx-auto" src={principalVideo} autoPlay muted loop controls style={{ width: '100%' }} >
                                    *Your browser does not support playing video.
                                </video>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default MainInro