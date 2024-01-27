import AboutDescription from "./about/AboutDescription";
import AboutPanel from "./about/AboutPanel";
import AboutVideo from "./about/AboutVideo";

export default function About(){
    return(
        <section className={`
            h-screen w-screen flex items-center justify-center bg-green-500
        `}>
            <AboutVideo />
            <AboutDescription />
            <AboutPanel />
        </section>
    )
}