import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { menuList } from "../../assets/menuList";

interface menuData {
    name: string,
    backgroundMain: string,
    backgroundMini: string
    subMenu: {
        name: string;
    }[],
}

const Header = ({ location }: { location: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const mainMenuRef = useRef<any>(null);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<menuData | null>(null);
    const sideMenuRef = useRef<any>(null);
    const sideSubMenuRef = useRef<any>(null);
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
        if ((sideMenuRef.current && !sideMenuRef.current.contains(e.target)) && (!sideSubMenuRef.current.contains(e.target))) {
            setIsSideMenuOpen(false);
            setSelectedMenu(null);
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
                        <img onClick={() => Navigate("/")} className="w-20 cursor-pointer zoomEffect" src="/images/logo.png" alt="Lords Academy Logo" />
                        <h1>LORDS <span className="text-specialCyan">ACADEMY</span></h1>
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
                                <div className="text-xl font-semibold"> ADMISSION </div>
                                <div className="text-xl font-semibold"> FEE </div>
                                <div className="text-xl font-semibold"> STUDENT LOGIN </div>
                                <div className="text-xl font-semibold"> CONTACT </div>

                            </div>
                        </div>
                    )}

                    {/* Large display Header */}
                    <div className="items-center hidden md:flex md:gap-5 mt-2 text-xs lg:text-sm xl:text-lg">
                        <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect"> ADMISSION </div>
                        <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect"> FEE </div>
                        <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect"> STUDENT LOGIN </div>
                        <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect"> CONTACT </div>
                        {location === 'home' && <div className="ms-5 text-xl cursor-pointer hover:opacity-70 flex items-center" onClick={toggleSideMenu} >
                            MENU  <span className="text-4xl pb-3"> &#9776;</span>
                        </div>}
                    </div>

                </div>
            </div>

            {/* Side Main Menu */}
            {isSideMenuOpen && (
                <div ref={sideMenuRef}
                    className="hidden md:block z-50 absolute top-0 end-0 w-[300px] bg-white py-8 h-[100vh] overflow-hidden">

                    <div className="flex flex-col w-full h-full justify-between overflow-hidden">

                        <div className={`w-full flex justify-center items-center text-xl font-semibold gap-2`}>
                            <h1 className="text-violetTxt">LORDS ACADEMY</h1>
                            <img className="w-14" src="/images/logo.png" alt="Lords Academy Logo" />
                        </div>

                        <div className="flex flex-col my-4 py-5 w-full">
                            {menuList?.length && menuList.map((menu) => (
                                <button className={`text-md px-4 py-2 text-start border-b font-semibold text-black ${selectedMenu?.name === menu.name && 'bg-black text-gray-50'}`}
                                    onClick={() => {
                                        if (menu?.subMenu?.length) setSelectedMenu({
                                            subMenu: menu?.subMenu,
                                            name: menu?.name,
                                            backgroundMain: menu?.backgroundMain,
                                            backgroundMini: menu?.backgroundMini,
                                        });
                                        else setSelectedMenu(null);
                                    }}> {menu?.name}
                                </button>
                            ))}
                        </div>

                        <div className="w-full flex items-center mb-3 px-4">
                            <div className="flex flex-wrap justify-center space-x-3 md:space-x-5">
                                <a href="https://web.whatsapp.com" target="_blank" className='p-1 md:p-0'>
                                    <img className='h-8 zoomEffect' src="/icons/whatsapp.png" alt="Whatsapp" />
                                </a>
                                <a href="https://twitter.com" target="_blank" className='p-1 md:p-0'>
                                    <img className='h-8 zoomEffect' src="/icons/twitter_outline.png" alt="Twitter" />
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" className='p-1 md:p-0'>
                                    <img className='h-8 zoomEffect' src="/icons/youtube_outline.png" alt="youtube" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            )}

            {selectedMenu?.subMenu && (
                <div ref={sideSubMenuRef}
                    className="hidden md:block z-50 absolute top-0 end-[300px] w-[300px] bg-black text-white pt-8 px-2 h-[100vh] overflow-hidden">

                    <div className="flex flex-col w-full h-full justify-between overflow-hidden">

                        <div className="flex flex-col px-4 my-4 py-5 w-full">
                            <div className="flex w-full justify-end">
                                <img className="w-20 mb-2" src={selectedMenu?.backgroundMini} alt="Lords Academy Logo" />
                            </div>
                            {selectedMenu?.subMenu?.length && selectedMenu?.subMenu.map((menu) => (
                                <button className={`text-md px-2 py-2 text-end border-b border-gray-900`}> {menu?.name} </button>
                            ))}
                        </div>

                        <div className="w-full h-[20%]">
                            <img className="h-full" src={selectedMenu?.backgroundMain} alt="Lords Academy Logo" />
                        </div>

                    </div>

                </div>
            )}

        </>
    );
};

export default Header;
