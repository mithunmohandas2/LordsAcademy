import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function CoCurricularActivities() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"CoCurricularActivities"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Co-Curricular Activities</h1>
                        <p className="text-lg font-semibold mt-4">
                            Overview
                        </p>
                        <p className="text-lg mt-4">
                            The school conducts various activities such as dramatics, quizzes, declamations, debates, singing,
                            dancing and so on to enhance the inherent and inborn talents of our students.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoCurricularActivities