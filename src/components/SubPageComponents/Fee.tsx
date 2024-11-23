import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function Fee() {

    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"Fee"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">Fee Payment</h1>
                        <br />

                        <a target="_blank" href="https://lordsacademy.eschoolonline.net/login">
                                <button className="btn zoomEffect">
                                    <i className="animation"></i>Fee Payment<i className="animation"></i>
                                </button>
                            </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Fee