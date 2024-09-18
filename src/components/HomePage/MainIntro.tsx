
function MainInro() {
    const banner = "https://img.freepik.com/premium-photo/education-school-concept-little-student-girl-studying-school_380164-38668.jpg";
    const banner2 = "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-school-season-back-to-school-season-blue-cartoon-image_11842.jpg";
    const news = "Your News Here  Your News Here  Your News Here  Your News Here  Your News Here  Your News Here";

    return (
        <>
            <section className="container-fluid relative -mt-28 -z-40">
                <div className="absolute w-[100vw] bg-violetTxt/80 text-white py-0.5 font-semibold top-[20vh] md:top-[50vh] xl:top-[70vh] overflow-hidden z-40">
                    <div className="animate-marquee whitespace-nowrap">
                        {news}
                    </div>
                </div>

                

                {/* Banner image */}
                <img className="w-full" src={banner} alt="LORDS ACADEMY Banner" />

                {/* Responsive YouTube iframe container */}
                {/* <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}> 
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/fIaxgppSi2c?autoplay=1&mute=1&loop=1&playlist=fIaxgppSi2c&controls=0&showinfo=0&modestbranding=1"
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div> */}
            </section>



            <section id="banner" className="flex flex-col justify-center sm:flex-row items-center gap-8">
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

                <div className="sm:w-1/2 container-fluid">
                    <img className="object-contain h-full" src={banner} alt="banner" />
                </div>
            </section>

            <section className="container-fluid">
                <img className="object-contain w-full" src={banner2} alt="banner" />
            </section>

        </>
    )
}

export default MainInro