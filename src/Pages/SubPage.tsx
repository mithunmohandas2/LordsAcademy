import { useState } from "react";
import EggsLife from "../components/EggsLife/EggsLife"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SideMenu from "../components/SideMenu/SideMenu"
import Contact from "../components/ContactUs/Contact";

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
                    {location === "blog" && <EggsLife />}
                    {location === "contact" && <Contact />}

                </div>

                <div className="w-full h-5 bg-yellow-400/70"></div>
                {location !== "contact" && <Footer />}
            </div>

        </div>
    )
}

export default SubPage