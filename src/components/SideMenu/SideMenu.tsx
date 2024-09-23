import { useEffect, useRef, useState } from "react";
import { menuList } from "../../assets/menuList";
import { Link } from "react-router-dom";

interface menuData {
    name: string,
    backgroundMain: string,
    link?: any;
    subMenu: {
        link?: any;
        name: string;
    }[],
}

// Change the menu options from 'assets > menuList' file

const menuBgStyle = {
    backgroundImage: `url('/images/menuWallpaper.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'black'
};

function SideMenu({ isSideMenuOpen, setIsSideMenuOpen, location }: { isSideMenuOpen: boolean, setIsSideMenuOpen: any, location: string }) {
    const [selectedMenu, setSelectedMenu] = useState<menuData | null>(null);
    const sideMenuRef = useRef<any>(null);
    const sideSubMenuRef = useRef<any>(null);

    const closeMenu = (e: { target: any; }) => {
        if (sideMenuRef.current) {
            // If submenu is open (exists in the DOM)
            if (sideSubMenuRef.current && sideSubMenuRef.current.contains(e.target)) {
                // Do nothing, click is inside the submenu
                return;
            }

            // If click is outside both sideMenu and sideSubMenu (if the submenu exists)
            if (!sideMenuRef.current.contains(e.target)) {
                setIsSideMenuOpen(false);
                setSelectedMenu(null);
            }
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeMenu);
        return () => {
            document.removeEventListener("mousedown", closeMenu);
        };
    }, []);

    return (
        <>
            {/* Side Main Menu */}
            {isSideMenuOpen && (
                <div ref={sideMenuRef}
                    className={`hidden md:block z-50 absolute top-0 w-[300px] bg-white py-8 h-[100vh] overflow-hidden ${location === 'home' ? 'end-0' : 'start-[60px]'}`}>

                    <div className="flex flex-col w-full h-full justify-between overflow-hidden">

                        <div className={`w-full flex justify-center items-center text-xl font-semibold gap-2`}>
                            <h1 className="text-violetTxt">LORD'S ACADEMY</h1>
                            <img className="w-14" src="/images/logo.png" alt="Lord's Academy Logo" />
                        </div>

                        <div className="flex flex-col my-4 py-5 w-full">
                            {menuList?.length && menuList.map((menu) => (
                                menu?.link ?
                                    <Link className="w-full border-b" to={menu?.link}>
                                        <button className={`text-md px-4 py-2 text-start font-semibold text-black ${selectedMenu?.name === menu.name && 'bg-black text-gray-50'}`}>
                                            {menu?.name}
                                        </button>
                                    </Link>
                                    :
                                    <button className={`text-md px-4 py-2 text-start border-b font-semibold text-black ${selectedMenu?.name === menu.name && 'bg-black text-gray-50'}`}
                                        onMouseEnter={() => {
                                            if (menu?.subMenu?.length) setSelectedMenu({
                                                subMenu: menu?.subMenu,
                                                name: menu?.name,
                                                backgroundMain: menu?.backgroundMain,
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
                <div ref={sideSubMenuRef} style={menuBgStyle}
                    className={`hidden md:block z-50 absolute top-0 w-[300px] bg-black text-white pt-8 px-2 h-[100vh] overflow-hidden ${location === 'home' ? 'end-[300px]' : 'start-[360px]'}`}>

                    <div className="flex flex-col w-full h-full justify-center overflow-hidden">
                        <div className="flex flex-col px-4 my-4 py-5 w-full">
                            <div className="flex w-full justify-end">
                            </div>
                            {selectedMenu?.subMenu?.length && selectedMenu?.subMenu.map((menu) => (
                                menu?.link ?
                                    <Link className="w-full border-b border-gray-900" to={menu?.link}>
                                        <button className={`text-md px-2 py-2 ${location === 'home' ? 'text-end' : 'text-start'}`}> {menu?.name} </button>
                                    </Link>
                                    :
                                    <button className={`text-md px-2 py-2 border-b border-gray-900 ${location === 'home' ? 'text-end' : 'text-start'}`}> {menu?.name} </button>
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default SideMenu