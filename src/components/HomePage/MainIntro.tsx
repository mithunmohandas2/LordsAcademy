
function MainInro() {
    const banner = "https://www.lordsacademy.com/wp-content/uploads/2018/07/School.jpeg"

    return (
        <>
            <section className="container-fluid relative -mt-28 -z-40">
                <img className="object-contain w-full" src={banner} alt="banner" />
            </section>

            <section id="banner" className="flex flex-col justify-center sm:flex-row items-center gap-8">
                <div className="sm:w-1/2 flex">
                    <div className="mx-auto px-2">
                        <div className="flex items-center mt-10">
                            <div className="h-36 border-e-2 py-10">
                                <p className="font-semibold px-2 text-center">WELCOME TO</p>
                            </div>
                            <h2 className="max-w-md text-3xl font-bold sm:text-4xl text-left text-slate-900 px-2">
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
                <img className="object-contain w-full" src={banner} alt="banner" />
            </section>

        </>
    )
}

export default MainInro