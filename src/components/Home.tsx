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
            w-screen flex flex-col
            md:w-[200vw] md:flex-row shadow-2xl z-30
        `}>
            <section className={`
                bg-white h-screen w-screen px-4w
                flex flex-col items-center 
            `}>
                <div className={`
                    ${bigelowRules.className} text-xl
                    w-full  flex justify-between items-center
                    px-2 
                `}>
                    <span>2024</span>
                    <span>Web Developer</span>
                </div>
                <div className="bg-[#F0EBDF] shadow-2xl pb-4 md:h-[80vh] md:mx-10">
                    <div className={`
                        w-[300px] md:[500px] my-2
                    `}>
                        <Image
                            src={'/assets/jailson-vicente.png'}
                            width={500}
                            height={76}
                            alt="Jailson Vicente Logo Image"

                        />
                    </div>
                    <div className={`
                        flex  flex-col gap-4 text-xl
                        text-left max-w-[90%] p-2
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
                <div className="hidden md:block md:absolute md:right-0 md:bottom-0 md:mx-2">
                    <Image
                        height={353}
                        width={555}
                        src={'/assets/binaryVetor.png'}
                        alt="binary vetor"
                    />
                </div>
            </section>

        </div>
    )
}