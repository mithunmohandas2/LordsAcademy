import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function CoCurricularActivities() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"CoCurricular Activities"} link={"/blog"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">LORD'S Life</h1>
                        <p className="text-lg font-semibold mt-4">
                            Positive, supportive relationships between students and teachers form the basis for learning
                            and these are what we promote in the school. We want our students to be confident, active partners
                            in their learning taking full advantage of all that the school can offer them.
                        </p>
                    </div>
                </div>


                <section id="banner" className="sm:flex justify-center sm:flex-row items-center">
                    <div className="sm:w-[65%] flex">
                        <img
                            src="https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4="
                            alt="Lord's Academy Students"
                            className="shadow-lg w-full max-w-4xl"
                        />
                    </div>

                    <div className="sm:w-[30%] mx-10 p-4 border-b">
                        <div className="text-lg text-gray-600 mb-2 font-semibold">
                            "The inspiring learning environment at LORD's is perfect for educational growth."
                        </div>
                        <div className="text-right text-gray-500">
                            <p>Chenhuan Liu, Lord's Academy student</p>
                        </div>
                    </div>
                </section>


                <div className="max-w-4xl mx-auto px-6">
                    <div className="mt-10 text-gray-700">
                        <p>
                            Each student with a strong sense of self. Our students have the ability to recognise their strengths and
                            proactively address their needs. They have awareness of their own language and culture, and are able to
                            pursue their passions. Students will develop literacy, numeracy, and articulation. They will become critical,
                            creative and caring thinkers. They will learn to be reflective, to manage change and achieve the qualifications
                            required for their next stage in life.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CoCurricularActivities