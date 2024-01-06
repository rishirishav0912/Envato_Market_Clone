import React from 'react';
import {motion} from 'framer-motion';

const Home = ()=> {
  return (
    <div className='text-white  bg-hero-pattern bg-auto sm:bg-cover bg-no-repeat bg-center sm:bg-top h-[120%] w-full'>
        <img 
            src={require('../assets/landing-logo.png')}
            alt='landing-logo'
            className='absolute mt-20 lg:ml-20 ml-10 sm:h-[48px] sm:w-[55px] h-[30px] w-[37px]'
        />

        <motion.div className='absolute mt-[230px] xl:ml-[300px] ml-[50px] pr-2'
        initial={{x:-100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.7}}
        >
          <h1 className='text-white lg:text-[75px] sm:text-[70px] text-[50px] inset-0 font-semibold leading-none mb-20 sm:mb-0'>A TOUR DE FORCE <br /> FOR MODERN GYMS</h1>
          <p className='text-zinc-600 text-[24px] font-medium p-1 mt-5 hidden sm:flex mb-20'>Introducing Stronger, a modern fitness and gym theme.</p>
        </motion.div>
          <motion.button 
          initial={{y:40,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.25}}
          className='absolute mt-[530px] xl:ml-[304px] ml-[54px] pr-2 text-black bg-yellow-300 h-[70px] w-[200px] sm:h-[60px] sm:w-[180px] flex justify-center items-center font-bold text-[15px] hover:bg-black hover:text-white transition ease-in duration-300'>PURCHASE
          </motion.button>
    </div>
  )
}

export default Home