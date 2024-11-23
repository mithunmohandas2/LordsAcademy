import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function Faculty() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"Faculty"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Our Faculty</h1>
                        <p className="text-lg font-semibold mt-4">
                            Overview
                        </p>
                        <p className="text-lg mt-4">
                            Our staff comprises talented, committed, sincere, devoted, ever friendly, caring and loving members.
                            They are the torch bearers who impart our students, the right knowledge, wisdom and ways to be
                            truthful and honest in their lives. Their efforts and hard work are channeled towards fostering
                            excellence in academics, nurturing noble virtues and reach the pinnacle of capabilities.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faculty