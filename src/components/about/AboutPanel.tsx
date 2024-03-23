import Image from "next/image";

export default function AboutPanel() {
    return (
        <div className={`
            w-screen
            md:w-[15vw] h-full gap-3 bg-white
            flex flex-col items-center justify-center
            shadow-2xl z-30
        `}>
            <button className="items-center flex flex-col gap-2 p-2 shadow-sm active:translate-y-2 hover:shadow-lg hover:-translate-y-2 w-full h-1/3">
                <Image
                    src={'/assets/experience.png'}
                    width={60}
                    height={66.67}
                    alt="Experience Button"
                />
                <p className="text-xl text-[#545353]">Experience</p>
                <p className="text-base text-[#A39E9E]">2+ years</p>
            </button>
            <button className="items-center flex flex-col gap-2 p-2 shadow-sm active:translate-y-2 hover:shadow-lg hover:-translate-y-2 w-full h-1/3">
                <Image
                    src={'/assets/completed.png'}
                    width={60}
                    height={57}
                    alt="Completed + 3 projects"
                />
                <p className="text-xl text-[#545353]">Completed</p>
                <p className="text-base text-[#A39E9E]">3+ Projects</p>
            </button>
            <button className="items-center flex flex-col gap-2 p-2 shadow-sm active:translate-y-2 hover:shadow-lg hover:-translate-y-2 w-full h-1/3">
                <Image
                    src={'/assets/support.png'}
                    width={60}
                    height={60}
                    alt="Let's Talk"
                />
                <p className="text-xl text-[#545353]">Contact</p>
                <p className="text-base text-[#A39E9E]">Let's Talk</p>
            </button>
        </div>
    )
}