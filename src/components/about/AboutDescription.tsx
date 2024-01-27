export default function AboutDescription() {
    return (
        <div className={`
            w-3/5 h-full bg-[#F0EBDF]
            flex flex-col justify-between text-[#9b0303]
        `}>
            <div className="border-b-2 border-black opacity-10 h-[5vh]"></div>
            <div className="flex flex-col gap-5 text-left items-center h-full py-[5vh] px-[2.5vh]">
                <p className={`
                text-base 
            `}>
                    I began my career in the metallurgical field as a machining mechanic at the age of 15, where my initial exposure to programming occurred.
                </p>
                <p className={`
                text-base
            `}>
                    However, it wasn't in web, mobile, or desktop languages but in CNC machine programming. The intricacies of this field fascinated me, sparking a deeper interest in technology.
                </p>
                <p className={`
                text-base 
            `}>
                    As I delved further, I discovered the world of web development, prompting me to prepare for a career transition. Over the past 12 months, I've ventured into freelancing, taking on various projects.
                </p>
                <p className={`
                text-base 
            `}>
                    My primary expertise lies in Front-End development, and I'm actively seeking opportunities to specialize in full-stack development.
                </p>
                <button className="h-[40px] w-[50%] bg-black text-white rounded-md shadow-lg active:-translate-y-2">Download CV</button>
            </div>

            <div className="border-t-2 border-black opacity-10 h-[5vh] "></div>
        </div>
    )
}