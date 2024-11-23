import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function CurricularActivities() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"CurricularActivities"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Curricular Activities</h1>
                        <p className="text-lg font-semibold mt-4">
                            Overview
                        </p>
                        <p className="text-lg mt-4">
                            <span className="font-semibold">  Lords Academy, Varandarappilly</span>
                            , is an English Medium School, following the Indian Certificate of
                            Secondary Education (ICSESyllabus) an internationally accepted system of education. Lord’s Academy
                            and Kindergarten symbolize the CMI’s relentless quest for excellence in education and are the
                            realization of the long-cherished dreams of many people who aspire for holistic education.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurricularActivities