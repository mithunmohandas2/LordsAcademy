import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ location }: { location: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<any>(null);
    const Navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = (e: { target: any; }) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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

    return (
        <>
            <div className="px-[16px] md:px-8 py-4 2xl:px-16 z-50">
                <div className="flex justify-between items-center">

                    <div className={`flex items-center text-2xl font-semibold gap-3 ${location === 'home' && 'opacity-0'}`}>
                        <img onClick={() => Navigate("/")} className="w-20 cursor-pointer zoomEffect" src="/images/logo.png" alt="Lords Av=cademy Logo" />
                        <h1>LORDS <span className="text-specialCyan">ACADEMY</span></h1>
                    </div>

                    {/* Mobile Mode */}
                    <div className={`md:hidden z-50`}>
                        <button className="cursor-pointer" onClick={toggleMenu}>
                            <span className="text-4xl pb-3">  &#9776;</span>
                        </button>
                    </div>

                    {/* Mobile Header */}
                    {isOpen && (
                        <div
                            ref={dropdownRef}
                            className="md:hidden z-50 absolute top-0 left-0 w-full bg-white p-8 h-[100vh]">
                            <div className="relative flex flex-col  mx-4 my-4 gap-8 py-5">

                                <div className="flex items-center justify-end px-4 w-full ">
                                    <span className="material-symbols-outlined cursor-pointer" onClick={toggleMenu}> close </span>
                                </div>

                                <div className=" text-2xl font-semibold" >
                                    ADMISSION
                                </div>

                                <div className=" text-2xl font-semibold" >
                                    FEE
                                </div>

                                <div className=" text-2xl font-semibold" >
                                    STUDENT LOGIN
                                </div>

                                <div className=" text-2xl font-semibold" >
                                    CONTACT
                                </div>


                            </div>
                        </div>
                    )}


                    {/* Large display Header */}
                    <div className="items-center hidden md:flex md:gap-5 mt-2 text-xs lg:text-sm xl:text-lg">
                        <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect" >
                            ADMISSION
                        </div>

                        <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect" >
                            FEE
                        </div>

                        <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect" >
                            STUDENT LOGIN
                        </div>

                        <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect" >
                            CONTACT
                        </div>

                        {location === 'home' && <div className="ms-5 text-xl cursor-pointer hover:opacity-70 flex items-center" >
                            MENU  <span className="text-4xl pb-3">  &#9776;</span>
                        </div>}
                    </div>

                </div>
            </div>

        </>
    );
};

export default Header;
