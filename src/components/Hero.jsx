import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Section() {

    const controls = useAnimation();
 
    useEffect(() => {
        // Initial animation when component mounts
        controls.start({ y: 0, opacity: 1 });
      }, [controls]);


  return (
    <motion.section
      className="px-5 flex flex-col justify-center mt-[64px]">
      <div className="max-sm:max-w-72 w-full mx-auto">
        <motion.div
          className="mx-auto mt-[52px] max-w-72 flex justify-evenly py-4 px-6 bg-page-highlightcolor rounded-full"
          initial={{ y: '-100%', opacity: 0 }}
      animate={controls}
      transition={{ 
        duration: 1.8, 
        ease: [0.73, 0.33, 0.23, 0.96],
        opacity: { duration: 2 }
      }}
        >
          <p className="font-poppins-medium font-medium text-custom-16 leading-custom-tight">Google: </p>
          <span class="flex items-center gap-x-1">
            <img src='/img/Phosphor.webp' alt='Estrellas para calificar a google' width="18" height="18" loading="lazy"/>
            <img src='/img/Phosphor.webp' alt='Estrellas para calificar a google' width="18" height="18" loading="lazy"/>
            <img src='/img/Phosphor.webp' alt='Estrellas para calificar a google' width="18" height="18" loading="lazy"/>
            <img src='/img/Phosphor.webp' alt='Estrellas para calificar a google' width="18" height="18" loading="lazy" />
            <img src='/img/Phosphor.webp' alt='Estrellas para calificar a google' width="18" height="18" loading="lazy" />
        </span>
          <p className="font-poppins-medium font-bold text-custom-16 leading-custom-tight">(4.9)</p>
        </motion.div>
        <motion.div
          className="mt-4 flex flex-col text-center justify-center items-center"
          initial={{ y: '-50%', opacity: 0 }}
      animate={controls}
      transition={{ 
        duration: 1.2, 
        ease: [0.6, 0.05, -0.01, 0.9],
        opacity: { duration: 1.1 }
      }}
        >
          <h1 className="lg:text-5xl mb-4 font-poppins-semibold text-6xl leading-custom-tight-1.2 font-bold">Brewed to perfection</h1>
          <p className="lg:text-xl font-poppins-regular text-custom-16 leading-custom-tight px-4">Your perfect spot for coffee, pastries, and more.</p>
        </motion.div>
        <motion.div
          className="flex justify-center items-center mt-8"
          initial={{ y: '-50%', opacity: 0 }}
      animate={controls}
      transition={{ 
        duration: 1.2, 
        ease: [0.6, 0.05, -0.01, 0.9],
        opacity: { duration: 2 }
      }}
        >
          <button className="bg-black text-white text-custom-16 leading-custom-tight-1.2 py-4 px-8 rounded-3xl transform transition-transform duration-300 hover:scale-95 font-poppins-semibold font-semibold text-base">
            Explore menu
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}