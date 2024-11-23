import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function OurCampus() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"OurCampus"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Our Campus</h1>
                        <p className="text-lg font-semibold mt-4">
                            Overview
                        </p>
                        <p className="text-lg mt-4">
                            Lord’s Academy is an institution which provides a favourable environment for the teaching-learning
                            activities. Our school’s infrastructure is the best of its kind. We provide an eco-friendly atmosphere for
                            the overall development of our students.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurCampus