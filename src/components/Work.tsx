import { BIZ_UDMincho } from "next/font/google";
import WorkCard1 from "./work/WorkCard1";


export default function Work(){
    return(
        <div className={`
            md:h-screen h-full w-screen flex items-center justify-center bg-white md:py-8
        `}>
            <div className="bg-[#F0EBDF] w-full h-full py-4">
                    <WorkCard1 />
                    
            </div>
        </div>
    )
}