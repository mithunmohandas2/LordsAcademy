import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"


function ComputerLab() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"ComputerLab"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">ComputerLab</h1>

                        <p className="text-lg mt-4">
                            A Hi-Tech computer lab provides advanced computing facilities with internet connectivity. The teachers
                            and students have the access to computers and the professional software tools. Computer knowledge
                            enhances and sharpens the analytical skills of our students.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComputerLab