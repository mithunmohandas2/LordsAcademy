import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function Management() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"Management"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Management</h1>
                        <p className="text-lg font-semibold mt-4">
                            Lord’s Academy, Varandarappilly, Thrissur established in 2005 is a school under the management of
                            Lord’s Academy Educational & Charitable Trust, formed by the CMI Fathers of I.H.Monastery,
                            Varandarappilly.
                        </p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Management