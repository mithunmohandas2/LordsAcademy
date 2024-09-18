import logo from "/images/logo.png"

function Footer() {
    return (
        <>
            <div className="flex flex-col mt-10">

                <div className="m-5 xl:mx-20 pb-5 border-b lg:flex">

                    <div className="md:min-w-[400px] 2xl:min-w-[600px]">

                        <div className={`flex justify-center lg:justify-start items-center text-2xl font-semibold gap-3`}>
                            <img className="w-20" src={logo} alt="Lords Av=cademy Logo" />
                            <div className="flex flex-col text-specialCyan">
                                <h1>LORDS</h1>
                                <h1>ACADEMY</h1>
                            </div>
                        </div>

                        <p className="my-2 text-center lg:text-start">
                            A safe nurturing international school for all children
                        </p>

                        <div className="flex justify-center lg:justify-start items-center my-3">
                            <div className="flex flex-wrap justify-center space-x-3 md:space-x-5">
                                <a href="https://www.facebook.com" target="_blank" className='p-1 md:p-0'>
                                    <img className='h-8 zoomEffect' src="/icons/facebook.png" alt="Facebook" />
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" className='p-1 md:p-0'>
                                    <img className='h-8 zoomEffect' src="/icons/linkedIn_logo.png" alt="LinkedIn" />
                                </a>
                                <a href="https://web.whatsapp.com" target="_blank" className='p-1 md:p-0'>
                                    <img className='h-8 zoomEffect' src="/icons/whatsapp.png" alt="Whatsapp" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" className='p-1 md:p-0'>
                                    <img className='h-8 zoomEffect' src="/icons/instagram.png" alt="Instagram" />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="w-full grid grid-cols-2 md:grid-cols-4">

                        <div className='px-3 sm:px-6'>
                            <h3 className="text-lg sm:text-xl font-semibold  mt-4 mb-2">Useful Links</h3>
                            <ul className='text-sm sm:text-lg font-thin'>
                                <li className='cursor-pointer hover:text-blue-700'>About Us</li>
                                <li className='cursor-pointer hover:text-blue-700'>Staff Directory</li>
                                <li className='cursor-pointer hover:text-blue-700'>Parents</li>
                                <li className='cursor-pointer hover:text-blue-700 font-semibold'>School Facilities</li>
                                <li className='cursor-pointer hover:text-blue-700'>FAQs</li>
                            </ul>
                        </div>
                        <div className='px-3 sm:px-6'>

                            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 opacity-0">Links</h3>
                            <ul className='text-sm sm:text-lg font-thin'>
                                <li className='cursor-pointer hover:text-blue-700'>Application</li>
                                <li className='cursor-pointer hover:text-blue-700'>Academics</li>
                                <li className='cursor-pointer hover:text-blue-700'>News</li>
                                <li className='cursor-pointer hover:text-blue-700'>Blog</li>
                                <li className='cursor-pointer hover:text-blue-700'>Careers</li>
                            </ul>
                        </div>
                        <div className='px-3 sm:px-6'>

                            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Contact</h3>
                            <ul className='text-sm sm:text-lg font-thin'>
                                <li>Capital Square Two, 21 Church Street, #01-01, Singapore 049480</li>
                                <li>+65 6466 4475</li>
                                <li>admissions@ils.edu.sg</li>
                            </ul>
                        </div>
                        <div className='px-3 sm:px-6'>

                            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Disclaimer</h3>
                            <ul className='text-sm sm:text-lg font-thin'>
                                <li className='cursor-pointer hover:text-blue-700'>Disclosure</li>
                                <li className='cursor-pointer hover:text-blue-700'>Dispute Resolution & Withdrawal Process</li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="text-center mx-5 xl:mx-10 opacity-50 text-sm sm:text-lg font-thin">
                    <p >Copyright 2024 Integrated International School I CPE Registration No. 201012199C I Registration Period: 13/07/2024 to 12/07/2028 </p>
                    <p > EduTrust Certificate No. EDU-2-2145 I EduTrust Registration Period: 26/02/2022 to 25/02/2026.</p>
                </div>

                <div className="flex w-full justify-end pe-10 my-3 mb-5">
                    <button className="cursor-pointer bg-gray-500 text-white py-2 px-3 material-symbols-outlined"
                        onClick={() => window.scrollTo(0, 0)}>
                        stat_1
                    </button>
                </div>
            </div>

        </>
    )
}

export default Footer