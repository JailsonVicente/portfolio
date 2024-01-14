
import Home from '@/components/Home';
import Section3 from '@/components/Section3'
import Work from '@/components/Work';
import { BIZ_UDMincho } from 'next/font/google';
import { Bigelow_Rules } from 'next/font/google';
import { useEffect } from 'react'

const bizUDMincho = BIZ_UDMincho({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal']
})

const bigelowRules = Bigelow_Rules({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})


export default function Container() {
  useEffect(() => {
    const handleWheel = (event: any) => {
      if (event.deltaY !== 0) {
        document.documentElement.scrollLeft += event.deltaY;
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('wheel', handleWheel, { passive: false });

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className={`
        h-screen   items-center justify-center
        bg-slate-700 
    `}>
        <title>Jailson Vicente</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className={`
        inline-flex
        ${bizUDMincho.className}
      `}>
        <Home />
        <Work />
        <Section3 />
      </div>

    </div>
  )
}
