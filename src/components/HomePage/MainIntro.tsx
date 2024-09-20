import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainInro() {
    // const banner = "/images/Banner.jpg";
    const principal = "https://www.lordsacademy.com/wp-content/uploads/2021/02/principal.jpg";
    const principalVideo = "/videos/PrincipalSpeech.mp4"
    const videoBanner = "/videos/videoBanner.mp4"
    const news = "Your News Here  Your News Here  Your News Here  Your News Here  Your News Here  Your News Here";
    const sliderImages = [
        "/images/carousel1.png",
        "/images/carousel2.png",
        "/images/carousel3.jpg",
        "/images/carousel4.webp",
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <section className="container-fluid relative -mt-28 -z-40">
                <div className="absolute w-full bg-violetTxt/80 text-white py-0.5 font-semibold top-[48vw] sm:top-[50vw] md:top-[52vw] xl:top-[48vw] 2xl:top-[50vw] overflow-hidden z-40">
                    <div className="animate-marquee whitespace-nowrap z-50">
                        {news}
                    </div>
                </div>

                {/* Banner image */}
                {/* <img className="w-full" src={banner} alt="LORDS ACADEMY Banner" /> */}

                <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
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
                    <div className="absolute top-0 left-0 w-full h-full">
                        <video className="video 3xl:mx-auto" src={videoBanner} autoPlay muted loop controls style={{ width: '100%' }} >
                            *Your browser does not support playing video.
                        </video>
                    </div>
                </div>
            </section>

            <div className="absolute w-[180px] p-2 font-semibold top-[5vh] md:top-[8vh] xl:top-[10vh] lg:start-20 z-50">
                <div className="flex flex-col justify-center w-full items-center">
                    <img className="w-12 lg:w-20 zoomEffect" src="/images/logo.png" alt="Lords Av=cademy Logo" />
                    <h2>LORDS ACADEMY</h2>

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
                            <a href="tel:+914802760322" target='_blank' className="mx-1 px-0.5 h-10 mb-2 cursor-pointer zoomEffect"><span className="material-symbols-outlined"> call </span></a>
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
                                LORDS ACADEMY
                            </h2>
                        </div>

                        <p className="max-w-md my-4 text-left text-slate-700 px-2">
                            When you walk through the doors of IIS, you'll discover a safe, nurturing sanctuary for students, parents and families as they join our integrated community. Our dedicated facilities include our Jungle Snoezelen, Baking Studio, Indoor Occupational Therapy Suite, Library, and Art Studio! In addition, we have several private suites for our Support Staff to ensure all of our students' needs are met.
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

            <section className="container-fluid bg-violetTxt/70 pt-5 md:pt-10">

                <div className="md:flex text-center md:justify-center md:gap-5 mt-2 mb-10 max-w-[800px] mx-auto">
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl  text-white font-semibold"> Upcoming Events : </h3>
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl  text-white">📅 September 12, 2024</h3>
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl  text-white">Alumini Meet</h3>
                </div>

                <div className="bg-menubarBg py-5 md:py-10">

                    <div className="sm:flex justify-center sm:flex-row items-center gap-8">

                        <div className="sm:w-2/3 flex flex-col mb-8 sm:mb-0">
                            <img className="object-contain w-full rounded-lg shadow-md mx-auto" src={principal} alt="principal" />
                            <p className="relative -mt-10 ms-3 text-center font-bold">Fr. JOSE KIDANGAN</p>
                        </div>

                        <div className="sm:w-full flex">
                            <div className="mx-4 sm:mx-auto max-w-[600px]">
                                <h5 className="mb-2 font-semibold text-xl text-gray-50">Principal's Message</h5>
                                <video className="video 3xl:mx-auto" src={principalVideo} autoPlay muted loop controls style={{ borderRadius: '10px', width: '100%' }} >
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