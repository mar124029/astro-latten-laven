import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        controls.start({ y: '-100%', opacity: 0 });
      } else {
        // Scrolling up
        controls.start({ y: 0, opacity: 1 });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, controls]);

  useEffect(() => {
    // Initial animation when component mounts
    controls.start({ y: 0, opacity: 1 });
  }, [controls]);

  return (
    <>
      <motion.header
        id="header"
        className="fixed top-0 left-0 right-0 z-30 backdrop-blur-sm"
        initial={{ y: '-100%', opacity: 0 }}
        animate={controls}
        transition={{ 
          duration: 1.8, 
          ease: [0.53, 0.13, 0.23, 0.96],
          opacity: { duration: 2 }
        }}
      >
        <div className="py-2 px-24 flex justify-between items-center max-sm:px-5">
          <a href="#"><img src="/img/Logo.webp" alt="Logo de la Página" width="68" height="53" /></a>
          {/* Menu visible on larger screens */}
          <nav className="hidden sm:hidden md:flex lg:flex ">
            <ul className="flex flex-row justify-between">
              <li><a href="#menu" className="text-base font-poppins-medium font-extrabold leading-custom-tight mr-10">Menu</a></li>
              <li><a href="#" className="text-base font-poppins-medium font-extrabold leading-custom-tight">News</a></li>
            </ul>
          </nav>
          {/* Hamburger icon visible on smaller screens */}
          <img
            src="/img/Hamburger.webp"
            alt="Hamburger o conocido como un menu despegable"
            width="60"
            height="60"
            className="cursor-pointer max-sm:block hidden"
            onClick={() => setIsMenuOpen(true)}
            loading="lazy"
          />
        </div>
        <div className="border border-highlightcolor"></div>
      </motion.header>

      {/* Mobile menu */}
      <div className={`z-50 fixed top-0 right-0 w-64 h-full bg-page-highlightcolor shadow-lg transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} max-sm:flex flex-col p-4`}>
        <button 
          className="self-end text-2xl mb-4"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
        <nav>
          <ul className="flex flex-col space-y-4">
            <li><a href="#menu" className="text-base font-poppins-medium font-extrabold leading-custom-tight">Menu</a></li>
            <li><a href="#" className="text-base font-poppins-medium font-extrabold leading-custom-tight">News</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
