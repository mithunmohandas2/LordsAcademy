
function Page2() {
    const videoBanner = "/videos/videoBanner.mp4"

    return (
        <>
            <div className="text-center text-3xl">Page2</div>
            <hr className="mx-10" />
            <p className="text-center my-4">This is a dummy page</p>
            {/* static video banner */}
            <div className="w-full h-full sm:w-[50%] sm:mx-auto">
                <video className="video 3xl:mx-auto" src={videoBanner} autoPlay muted loop controls style={{ width: '100%' }} >
                    *Your browser does not support playing video.
                </video>
            </div>
        </>
    )
}

export default Page2