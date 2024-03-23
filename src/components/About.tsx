import AboutDescription from "./about/AboutDescription";
import AboutPanel from "./about/AboutPanel";
import AboutVideo from "./about/AboutVideo";

export default function About(){
    return(
        <section className={`
            flex flex-col w-screen bg-green-500
            items-center justify-center 
            md:flex
        `}>
            <AboutVideo />
            <AboutDescription />
            <AboutPanel />
        </section>
    )
}