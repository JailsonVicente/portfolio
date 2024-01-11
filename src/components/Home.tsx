

export default function Home() {
    return (
        <div className={`
            h-screen w-screen flex items-center justify-center
        `}>
            <div className="bg-gradient-to-b from-neutral-700 to-neutral-300 shadow text-white h-full w-[30vw]">
            Iframe Video Iframe Video Iframe Video Iframe Video
            </div>
            <div className="bg-white h-full w-full flex justify-center">
                <div className="bg-[#F0EBDF] w-[65vw] h-[75vh] mt-[7vh] ">
                    <span>
                        Jailson Vicente
                    </span>
                    <div className="flex  flex-col gap-[40px] text-left max-w-[900px]">
                        <h1>
                            Hello! I'm Jailson Vicente, a web developer committed to transforming creative ideas into impactful digital solutions.
                        </h1>
                        <h1>
                            If you're in search of a professional to elevate your team or a reliable partner for your web projects, you're in the right place.
                        </h1>
                        <h1 className="border-[#400] border-b-2 w-fit text-[48px] pb-[4px]">
                            Let's bring your vision to life!
                        </h1>
                        <h4>Jailson Vicente Web Developer</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}