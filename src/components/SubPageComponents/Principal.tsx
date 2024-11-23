import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"


function Principal() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"Principal"} link={"/blog"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Principal</h1>
                        <p className="text-lg mt-4">
                            Dear all,
                        </p>
                        <p className="text-lg mt-4">
                            Greetings!
                        </p>
                        <p className="text-lg mt-4">
                            It is with great pleasure that I welcome you all to Lord’s Academy. I am greatly impressed by the
                            commitment of the school and the staff for the provision of an excellent all-round education for our
                            students through the state-of-the-art services with a vision - ‘To love.. to learn… to live’ . Our mission is
                            to provide a conducive environment for the student community that fosters integral formation of the
                            whole child towards pursuit of excellence. Lord’s Academy strives to transform every child through
                            academic excellence with integral co-curricular activities upholding the value system of harmony with
                            nature, respect for humanity and responsibility to the society by building confidence, skills and

                            competence to transform them as enlightened citizens who care for the nation. Let’s walk in the
                            enlightened path of our Supreme Guru!
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6">
                    <div className="mt-10 text-gray-700">
                        <p>Principal</p>
                        <p>Fr. Jose Kidangan CMI</p>
                        <p>Lord’s Academy ICSE School</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Principal