import React from 'react';
import { motion } from 'framer-motion';

function Features() {
  return (
    <div className='w-full h-screen pt-5 bg-zinc-900 relative'>
      <div className='w-full h-screen absolute flex justify-center items-center z-10'>
        <img
          src={require('../assets/landing-logo-1.png')}
          alt='landing-logo'
          className='sm:h-[210px] sm:w-[210px] h-[190px] w-[190px]'
        />
      </div>
      <motion.div
        className='absolute z-20 flex w-full h-screen justify-center items-center'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{once:true}}
      >
        <img
          src={require('../assets/laptop.png')}
          alt='laptop'
          className='relative z-20 inset-0 h-[250px] sm:h-[325px] md:h-[400px] lg:h-[500px] mr-[300px] md:mr-[450px]'
        />
      </motion.div>
      <motion.div
        className='absolute z-30 flex w-full h-screen justify-center items-center'
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{once:true}}
      >
        <img
          src={require('../assets/mobile.png')}
          alt='phone'
          className='relative z-30 inset-0 h-[170px] sm:h-[200px] md:h-[250px] mr-[100px]'
        />
      </motion.div>
      <div
        className='flex flex-col absolute h-screen w-full justify-center items-end pr-[10px] sm:pr-[55px] md:pr-[100px] lg:pr-[150px] -mt-[50px] z-40 text-white tracking-wide'
      >
        <motion.h1
          className='text-[15px] sm:text-[22px] md:text-[30px] lg:text-[40px] xl:text-[60px] relative font-semibold inset-0 flex leading-none'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{once:true}}
        >PERFECTLY<br /> FITS ALL <br />DEVICE TYPES</motion.h1>
        <ul className='hidden list-none relative inset-0 md:flex flex-col items-start mt-[20px] mr-[20px] lg:mr-[80px] xl:mr-[220px]'>
          <motion.li
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{once:true}}
          ><span className='text-yellow-300 text-[22px] mr-[15px]'>&bull;</span>Well-optimized</motion.li>
          <motion.li
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{once:true}}
          ><span className='text-yellow-300 text-[22px] mr-[15px]'>&bull;</span>Fully responsive</motion.li>
          <motion.li
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{once:true}}
          ><span className='text-yellow-300 text-[22px] mr-[15px]'>&bull;</span>Retina-ready</motion.li>
          <motion.li initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{once:true}}
          ><span className='text-yellow-300 text-[22px] mr-[15px]'>&bull;</span>Great on all screens</motion.li>
        </ul>
      </div>
    </div>
  )
}

export default Features