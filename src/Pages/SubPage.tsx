import EggsLife from "../components/EggsLife/EggsLife"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

function SubPage({ location }: { location: string }) {
    return (
        <div className="flex">

            <div className="w-[60px] bg-menubarBg">
                <div className="mt-3 text-center text-white cursor-pointer hover:opacity-70 items-center" >
                    <p className="text-4xl">  &#9776;</p>
                    <p className="text-xs">MENU</p>
                </div>
            </div>


            <div className="w-full">
                <Header location={location} />
                <div className="my-10">

                    {/* SubPage Contents : Assign a new component for each subpage and add them as below */}
                    {location === "EGGS Life" && <EggsLife />}

                </div>

                <div className="w-full h-5 bg-yellow-400/70"></div>
                <Footer />
            </div>

        </div>
    )
}

export default SubPage