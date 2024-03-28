import Home from '@/components/Home';
import Section3 from '@/components/About';
import Work from '@/components/Work';
import { BIZ_UDMincho } from 'next/font/google';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import About from '@/components/About';

const bizUDMincho = BIZ_UDMincho({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal']
});

export default function Container() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold for mobile/desktop as needed
    };

    // Call handleResize initially
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event: any) => {
      if (event.deltaY !== 0) {
        if (isMobile) {
          // On mobile, scroll vertically
          document.documentElement.scrollBy({
            top: event.deltaY,
            left: 0,
          });
        } else {
          // On desktop, scroll horizontally
          document.documentElement.scrollBy({
            top: 0,
            left: event.deltaY,
          });
        }
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('wheel', handleWheel, { passive: false });

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [isMobile]);

  return (
    <main className={`
        flex items-center
    `}>
      <Head>
        <title>Jailson Vicente</title>
        <meta name="description" content="Jailson Vicente Portifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div
        className={`
          text-[#440000] flex flex-col
          w-screen
          md:flex-row
          ${bizUDMincho.className}
        `}
        id="container"
      >
        <Home />
        <Work />
        <About/>
      </div>
    </main>
  );
}
