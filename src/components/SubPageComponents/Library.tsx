import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"


function Library() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"Library"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Library</h1>
                        <p className="text-lg mt-4">
                            Library is the soul of any institution. It is a centre of acquiring, processing, preserving and disseminating
                            information to the user community. The school has set up a well-furnished library that houses adequate
                            stock of reference books, story books, periodicals, newspapers etc. for the benefit of students, with the
                            motto of empowering them with knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Library