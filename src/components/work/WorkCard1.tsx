import Image from "next/image";

export default function WorkCard1() {
    return (
        <div className={`
            w-full h-full flex
        `}>
            <section className={`
                w-1/2 h-full flex items-center flex-col
            `}>
                <div className="w-4/5">
                    <Image
                        src={'/assets/mockupSC.png'}
                        width={733}
                        height={391}
                        alt="Mockup Device"
                    />
                </div>
                <div>
                    <button className="w-12 h-12 bg-red-800 rounded-full">a</button>
                    <button className="w-12 h-12 bg-red-800 rounded-full">v</button>
                </div>

            </section>
            <section className={`
                w-1/2 h-full
            `}>
                <div className="p-2 flex  flex-col gap-4">
                    <h1 className="text-2xl leading-7 text-[#9B0303]">This is a contact page for my sister company,they have an automotive center.</h1>
                    <p className="text-xl leading-6">I focused on simple features such as buttons that redirect directly to the company's WhatsApp, links to social networks, and integration with Google Maps. <u>In the project I used:</u></p>
                    <p className="text-lg leading-5">
                        -Figma to develop the interface<br></br>
                        -HTML, CSS and JavaScript<br></br>
                        -Pexels website to download images<br></br>
                        -Photoshop for editing background images and recreating the company logo.</p>
                    <h2 className="text-xl leading-6 text-[#9B0303]">It's not perfect, but as it's the first project I developed alone I'm very happy! The first of many.</h2>
                    <div className="flex flex-col gap-1 w-full items-center text-white">
                        <button className="w-4/5 h-10 bg-black rounded-md">GitHub Code</button>
                        <button className="w-4/5 h-10 bg-black rounded-md">See Project</button>
                        
                    </div>
                </div>

            </section>
        </div>
    )
}