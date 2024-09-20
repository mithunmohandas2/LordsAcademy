import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainInro() {
    // const banner = "/images/Banner.jpg";
    const principal = "https://www.lordsacademy.com/wp-content/uploads/2021/02/principal.jpg";
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

                <div className="absolute w-[180px] p-2 font-semibold top-[5vh] md:top-[8vh] xl:top-[10vh] lg:start-20 z-50">
                    <div className="flex flex-col justify-center w-full items-center">
                        <img className="w-12 lg:w-20" src="/images/logo.png" alt="Lords Av=cademy Logo" />
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
                                <button className="mx-1 px-0.5 h-10 mb-2"><span className="material-symbols-outlined"> call </span></button>
                                <button className="mx-1 px-0.5 h-10 mb-2"><span className="material-symbols-outlined"> location_on </span></button>
                                <button className="mx-1 px-0.5 h-10 mb-2"><span className="material-symbols-outlined"> search </span></button>

                            </div>
                        </div>

                    </div>

                </div>



                {/* Banner image */}
                {/* <img className="w-full" src={banner} alt="LORDS ACADEMY Banner" /> */}

                {/* Responsive YouTube iframe container */}
                <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/fIaxgppSi2c?autoplay=1&mute=1&loop=1&playlist=fIaxgppSi2c&controls=0&showinfo=0&modestbranding=1"
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
            </section>



            <section id="banner" className="sm:flex justify-center sm:flex-row items-center gap-8">
                <div className="sm:w-1/2 flex">
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
                <div className="sm:w-1/2">
                    <Slider {...sliderSettings}>
                        {sliderImages.map((image, index) => (
                            <div className="w-full h-[200px] sm:h-[450px]" key={index}>
                                <img className="object-cover w-full h-full lg:w-[90%]" src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section className="container-fluid bg-violetTxt p-5 md:p-10">
                <br />
                <div className="bg-white rounded-lg p-5 md:p-10">
                    <h1 className="text-[2.2rem] text-center text-violetTxt font-semibold">Our Principal</h1>
                    <hr className="m-5" />

                    <div className="sm:flex justify-center sm:flex-row items-center gap-8">

                        <div className="sm:w-2/3 flex flex-col mb-8 sm:mb-0">
                            <img className="object-contain w-full rounded-lg shadow-md" src={principal} alt="principal" />
                            <p className="text-center">Fr.JOSE KIDANGAN</p>
                        </div>

                        <div className="sm:w-full flex">
                            <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/fIaxgppSi2c?autoplay=1&mute=1&loop=1&playlist=fIaxgppSi2c&controls=0&showinfo=0&modestbranding=1"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            </div>

                            {/* <div className="mx-auto">
                                <video className="video 3xl:mx-auto" src={videoLink} autoPlay muted loop controls style={{ borderRadius: '10px', width: '100%' }} >
                                    *Your browser does not support playing video.
                                </video>
                            </div> */}
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default MainInro