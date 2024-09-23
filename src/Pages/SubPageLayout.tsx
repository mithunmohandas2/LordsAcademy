import { useState } from "react";
import LordsLife from "../components/SubPageComponents/LordsLife"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SideMenu from "../components/SideMenu/SideMenu"
import Contact from "../components/ContactUs/Contact";
import Page1 from "../components/SubPageComponents/Page1";
import Page2 from "../components/SubPageComponents/Page2";
import Page3 from "../components/SubPageComponents/Page3";
import Page4 from "../components/SubPageComponents/Page4";

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
                    {location === "blog" && <LordsLife />}
                    {location === "contact" && <Contact />}
                    {location === "page1" && <Page1 />}
                    {location === "page2" && <Page2 />}
                    {location === "page3" && <Page3 />}
                    {location === "page4" && <Page4 />}

                </div>

                <div className="w-full h-5 bg-yellow-400/70"></div>
                {location !== "contact" && <Footer />}
            </div>

        </div>
    )
}

export default SubPage