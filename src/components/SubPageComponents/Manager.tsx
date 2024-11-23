import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function Manager() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"Manager"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Manager</h1>
                        {/* <p className="text-lg mt-4">
                            Dear all,
                        </p>
                        <p className="text-lg mt-4">
                            Greetings!
                        </p>
                        <p className="text-lg mt-4">
                            This is a test message.
                        </p> */}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6">
                    <div className="mt-10 text-gray-700">
                        <p>Manager</p>
                        <p>Fr. Thomas Alanoikkal</p>
                        <p>Email: manager@lordsacademy.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager