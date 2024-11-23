import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"


function Infrastructure() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"Infrastructure"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Infrastructure</h1>

                        <p className="text-lg mt-4">
                            The School is located in a picturesque surrounding with excellent infrastructure, well trained and
                            qualified staff, digital classrooms, sports facilities, audio visual facilities and a large children’s
                            amusement park.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infrastructure