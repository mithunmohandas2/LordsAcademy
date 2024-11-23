import { useState } from "react";
import LordsLife from "../components/SubPageComponents/LordsLife"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SideMenu from "../components/SideMenu/SideMenu"
import Contact from "../components/ContactUs/Contact";
import Admission from "../components/SubPageComponents/Admission";
import Fee from "../components/SubPageComponents/Fee";
import StudentLogin from "../components/SubPageComponents/StudentLogin";
import ExtraPage from "../components/SubPageComponents/ExtraPage";
import CMI from "../components/SubPageComponents/CMI";
import CoCurricularActivities from "../components/SubPageComponents/CoCurricularActivities";
import CurricularActivities from "../components/SubPageComponents/CurricularActivities";
import Faculty from "../components/SubPageComponents/Faculty";
import Infrastructure from "../components/SubPageComponents/Infrastructure";
import Library from "../components/SubPageComponents/Library";
import Management from "../components/SubPageComponents/Management";
import Manager from "../components/SubPageComponents/Manager";
import OurCampus from "../components/SubPageComponents/OurCampus";
import Park from "../components/SubPageComponents/Park";
import PhotoGallery from "../components/SubPageComponents/PhotoGallery";
import Principal from "../components/SubPageComponents/Principal";
import Transport from "../components/SubPageComponents/Transport";
import VideoGallery from "../components/SubPageComponents/VideoGallery";
import ComputerLab from "../components/SubPageComponents/ComputerLab";

function SubPage({ location }: { location: string }) {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    return (
        <div className="flex">

            <div className="w-[60px] bg-menubarBg">
                <div className="mt-3 text-center text-white cursor-pointer hover:opacity-70 items-center" onClick={() => setIsSideMenuOpen(!isSideMenuOpen)} >
                    <p className="text-4xl">  &#9776;</p>
                    <p className="text-xs">MENU</p>
                </div>
            </div>

            {/* Side Main Menu */}
            < SideMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} location={location} />

            <div className="w-full">
                <Header location={location} />
                <div className="my-10">

                    {/* SubPage Contents */}
                    {location === "contact" && <Contact />}
                    {location === "admission" && <Admission />}
                    {location === "fee" && <Fee />}
                    {location === "Principal" && <Principal />}
                    {location === "Manager" && <Manager />}
                    {location === "Management" && <Management />}
                    {location === "CMI" && <CMI />}
                    {location === "OurCampus" && <OurCampus />}
                    {location === "Faculty" && <Faculty />}
                    {location === "CoCurricularActivities" && <CoCurricularActivities />}
                    {location === "CurricularActivities" && <CurricularActivities />}
                    {location === "Infrastructure" && <Infrastructure />}
                    {location === "Transport" && <Transport />}
                    {location === "Library" && <Library />}
                    {location === "ComputerLab" && <ComputerLab />}

                    {location === "blog" && <LordsLife />}
                    {location === "student_login" && <StudentLogin />}
                    {location === "Park" && <Park />}
                    {location === "PhotoGallery" && <PhotoGallery />}
                    {location === "VideoGallery" && <VideoGallery />}

                    {location === "ExtraPage" && <ExtraPage />}

                </div>

                <div className="w-full h-5 bg-yellow-400/70"></div>
                {location !== "contact" && <Footer />}
            </div>

        </div>
    )
}

export default SubPage