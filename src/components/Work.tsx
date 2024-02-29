import { BIZ_UDMincho } from "next/font/google";
import WorkCard1 from "./work/WorkCard1";


export default function Work(){
    return(
        <div className={`
            h-full w-screen flex items-center justify-center bg-white py-8
        `}>
            <div className="bg-[#F0EBDF] w-full h-full">
                    <WorkCard1 />
            </div>
        </div>
    )
}