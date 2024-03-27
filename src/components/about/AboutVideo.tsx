import Image from "next/image";

export default function AboutVideo(){
    return(
        <div className={`
            w-screen
            md:w-1/4 h-full bg-white pt-[10vh] pb-[15vh] px-[8vh] shadow-2xl z-30
        `}>
            <div className="w-full h-full ">
                <Image 
                    src={'/assets/skate.gif'}
                    width={332}
                    height={590}
                    alt="Skateboard video"
                    
                />
            </div>
        </div>
    )
}



