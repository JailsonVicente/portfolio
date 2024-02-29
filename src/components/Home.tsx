import { Bigelow_Rules } from "next/font/google"
import Image from "next/image"

const bigelowRules = Bigelow_Rules({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})




export default function Home() {
    return (
        <div className={`
                h-full w-[200vw] flex shadow-2xl z-30
        `}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <div className="bg-gradient-to-b from-neutral-700 to-neutral-300 shadow text-white h-full w-screen">
                Iframe Video Iframe Video Iframe Video Iframe Video
            </div>
            <div className={`
                bg-white h-screen w-screen 
                flex flex-col items-center 
            `}>
                <div  className={`
                    ${bigelowRules.className} text-xl
                    w-full  flex justify-between items-center
                `}>
                    <span>2024</span>
                    <span>Web Developer</span>
                </div>
                <div className="bg-[#F0EBDF] h-full  ">
                    <div>
                        <Image
                            src={'/assets/jailson-vicente.png'}
                            width={500}
                            height={76}
                            alt="Jailson Vicente Logo Image"
                            className="mb-4"
                        />
                    </div>
                    <div className={`
                        flex  flex-col gap-4
                        text-left text-xl max-w-[90%]
                    `}>
                        <h1>
                            Hello! I'm Jailson Vicente, a web developer committed to transforming creative ideas into impactful digital solutions.
                        </h1>
                        <h1>
                            If you're in search of a professional to elevate your team or a reliable partner for your web projects, you're in the right place.
                        </h1>
                        <h1 className={`
                            underline underline-offset-8 text-3xl
                            w-fit font-bold text-[#9B0303]
                        `}>
                            Let's bring your vision to life!
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}