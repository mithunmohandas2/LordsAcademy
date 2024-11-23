import { Link } from "react-router-dom"
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"

function Admission() {
    return (
        <>
            <div className="min-h-screen lg:py-5">
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs pageTitle={"Admission"} link={"/"} />

                    <div className="text-start my-10">
                        <h1 className="text-4xl font-bold text-gray-800">PROCEDURE FOR ADMISSION</h1>
                        <p className="text-lg mt-4">
                            The Little Kingdom of Lord’s Academy is open to children of age 4 and above as on 1st June and Lord’s
                            Pre-KG campus at I H Monastery is open to children of age 3. Parents should register their children for
                            admission to KG/ Pre-KG by online application form which is available in school website. Birth Certificate
                            indicating the name of child, TC/ Mark list if required and latest passport size photo should be uploaded
                            along with the online application form. Age, ability and conduct of the pupil will be the criteria for
                            admission.
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
                        <div className="text-lg text-gray-600 mb-4 font-semibold">
                            Click below to proceed to online admission
                        </div>
                        <div className="text-center text-gray-500">
                            <a target="_blank" href={'https://onlineadmissionforms.gjschool.xyz/applyonline?admission=TE9SROKAmVMgQUNBREVNWSBDTUkgSUNTRSBTQ0hPT0xfNTg='}>
                                <button className="btn zoomEffect">
                                    <i className="animation"></i>Online Admission<i className="animation"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </section>


                <div className="max-w-4xl mx-auto px-6">
                    <div className="mt-10 text-gray-700">
                        <b>
                            SCHOOL TIMING
                        </b>

                        <p>
                            KG & MAIN SCHOOL : 09:15 am to 03:45 pm
                        </p>

                        <p>
                            PRE-KG : 10:00 am to 02:00 pm
                        </p>

                        <p>
                            School Bus facility is available in existing routes for KG & MAIN SCHOOL and Bus facility is available for Pre-KG within a 5 km radius.
                        </p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Admission