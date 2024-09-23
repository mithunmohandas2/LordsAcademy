import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

const Header = ({ location }: { location: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const mainMenuRef = useRef<any>(null);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const Navigate = useNavigate();

    const toggleMainMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const closeMenu = (e: { target: any; }) => {
        if (mainMenuRef.current && !mainMenuRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeMenu);
        return () => {
            document.removeEventListener("mousedown", closeMenu);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Lock scroll when side menu is open
    useEffect(() => {
        if (isSideMenuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => {
            document.body.style.overflow = "auto"; // Cleanup on unmount
        };
    }, [isSideMenuOpen]);

    return (
        <>
            <div className="px-[16px] md:px-8 py-4 2xl:px-16 z-50">
                <div className="flex justify-between items-center">

                    <div className={`flex items-center text-2xl font-semibold gap-3 ${location === 'home' && 'opacity-0'}`}>
                        <img onClick={() => Navigate("/")} className="w-20 cursor-pointer zoomEffect" src="/images/logo.png" alt="Lord's Academy Logo" />
                        <h1>LORD'S <span className="text-specialCyan">ACADEMY</span></h1>
                    </div>

                    {/* Mobile Mode */}
                    <div className={`md:hidden z-50`}>
                        <button className="cursor-pointer" onClick={toggleMainMenu}>
                            <span className="text-4xl pb-3">&#9776;</span>
                        </button>
                    </div>

                    {/* Mobile Header */}
                    {isOpen && (
                        <div ref={mainMenuRef}
                            className="md:hidden z-50 absolute top-0 left-0 w-full bg-white p-8 h-[100vh]">
                            <div className="relative flex flex-col  mx-4 my-4 gap-6 py-5">

                                <div className="flex items-center justify-end px-4 w-full ">
                                    <span className="material-symbols-outlined cursor-pointer" onClick={toggleMainMenu}> close </span>
                                </div>
                                <Link to={"/admission"}>  <div className="text-xl font-semibold"> ADMISSION </div> </Link>
                                <Link to={"/fee"}> <div className="text-xl font-semibold"> FEE </div></Link>
                                <Link to={"/student_login"}> <div className="text-xl font-semibold">  STUDENT LOGIN  </div></Link>
                                <Link to={"/contact"}> <div className="text-xl font-semibold"> CONTACT </div></Link>

                            </div>
                        </div>
                    )}

                    {/* Large display Header */}
                    <div className="items-center hidden md:flex md:gap-5 mt-2 text-xs lg:text-sm xl:text-md 2xl:text-lg">
                        <Link to={"/admission"}> <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect"> ADMISSION </div> </Link>
                        <Link to={"/fee"}> <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect"> FEE </div> </Link>
                        <Link to={"/student_login"}> <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect"> STUDENT LOGIN </div> </Link>
                        <Link to={"/contact"}> <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect"> CONTACT </div> </Link>
                        {location === 'home' && <div className="ms-5 text-xl cursor-pointer hover:opacity-70 flex items-center" onClick={toggleSideMenu} >
                            MENU  <span className="text-4xl pb-3"> &#9776;</span>
                        </div>}
                    </div>

                </div>
            </div>

            {/* Side Main Menu */}
            < SideMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} location={location} />

        </>
    );
};

export default Header;
