
import Home from '@/components/Home';
import Section3 from '@/components/About'
import Work from '@/components/Work';
import { BIZ_UDMincho } from 'next/font/google';
import { useEffect } from 'react'
import Head from 'next/head';


const bizUDMincho = BIZ_UDMincho({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal']
})




export default function Container() {
  useEffect(() => {

    const handleWheel = (event: any) => {
      if (event.deltaY !== 0) {
        document.documentElement.scrollBy({
          top: 0,
          left: event.deltaY,
        });
      }


    }

    // Add the event listener when the component mounts
    document.addEventListener('wheel', handleWheel, { passive: false });

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <main className={`
        h-screen flex items-center 
    `}>
      <Head>
        <title>Jailson Vicente</title>
        <meta name="description" content="Jailson Vicente Portifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={`
        text-[#440000]  w-[400vw] flex h-full 
        ${bizUDMincho.className}
      `} id='container'>


        <Home /> 
        <Work />
        <Section3 />
      </div>
    </main>
  )
}
