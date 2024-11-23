import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function Transport() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"Transport"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Transport Facilities</h1>
                   
                        <p className="text-lg mt-4">
                            Our school operates a fleet of school buses to pick up and drop off students from designated
                            locations. These buses are often equipped with safety features and supervised by trained drivers
                            and attendants. Our school typically communicates transportation-related information to
                            parents and guardians, including bus schedules, routes, and any changes or disruptions to
                            transportation services.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transport