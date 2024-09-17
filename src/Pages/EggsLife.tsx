import Header from "../components/Header/Header"


function EggsLife() {
    return (
        <div className="flex">

            <div className="w-[100px] min-h-[100vh] bg-menubarBg">
                <div className="mt-3 text-center text-white cursor-pointer hover:opacity-70 items-center" >
                    <p className="text-4xl">  &#9776;</p>
                    <p className="text-xs">MENU</p>  
                </div>
            </div>


            <div className="w-full">
                <Header location={"EggsLife"} />

            </div>

        </div>
    )
}

export default EggsLife