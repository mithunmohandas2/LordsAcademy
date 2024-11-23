import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function CMI() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"CMI"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">CMI (Carmelites Of Mary Immaculate)</h1>
                        <p className="text-lg font-semibold mt-4">
                            Overview
                        </p>
                        <p className="text-lg mt-4">
                            CMI (Carmelites of Mary Immaculate) is the first indigenous congregation of Catholic Priests founded by
                            St. Kuriakose Elias Chavara in 1831 at Mannanam, Kottayam, State of Kerala, inspired by the life and
                            teachings of Jesus Christ. For St. Chavara, education was the only medium of transformation of the
                            person, the family and the society. With this vision in mind, St. Chavara opened a Sanskrit School in the
                            year 1864 at Mannanam, Kerala. In an age when Sanskrit education was the privilege of the elite caste
                            and the privileged, this school was the first of its kind open for all, irrespective of caste and creed.
                            Today, St. Chavara’s vision of education has come to fruition through hundreds of CMI educational
                            institutions as Professional Colleges, Arts and Science Colleges, Training Colleges, Technical Institutes,
                            Schools and Cultural Centres all over India and abroad.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CMI