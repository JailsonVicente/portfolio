
import Home from '@/components/Home';
import Section3 from '@/components/Section3'
import Work from '@/components/Work';
import { useEffect } from 'react'

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
    <main className={`
        h-screen   items-center justify-center
        bg-slate-700  
    `}>

      <div className='inline-flex'>
        <Home />
        <Work />
        <Section3 />
      </div>

    </main>
  )
}
