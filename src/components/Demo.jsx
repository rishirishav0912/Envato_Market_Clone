import React from 'react';
import {DemoCardData} from '../constants'

const DemoCard = ({img,heading})=>{
   
    return(
        <div className='pl-2 pr-2 flex flex-col sm:h-[550px] w-full sm:w-[400px] relative cursor-pointer'
        >
            <img src={img} alt={`img-${heading}`} />
            <h1 className='mt-7 font-bold text-white text-[20px] sm:text-[24px]' id='heading'>{heading}</h1>
            <div className={`h-[5px] w-[5px] border-yellow-200 border transition duration-300`}>
            &nbsp; 
            </div>
        </div>
    )
}

const Demo =()=> {
  return (
    <div className='h-fit bg-zinc-800 pt-40 w-full'>
        <div className=' w-full'>
        <h1 className='relative  text-white font-bold 
        text-[50px] sm:text-[65px] text-center tracking-wide'>WEBSITES</h1>
        <p className='relative pl-8 pr-8 mt-5 justify-center text-center  text-[14px] sm:text-[20px] text-white/[0.5] font-medium flex flex-wrap'>Stronger comes with six fully developed, easily importable & fully customizable website demos.</p>
        </div>
        <div className='flex flex-wrap gap-7 sm:gap-10 pl-5 pr-5 justify-center mt-10'>
        {
            DemoCardData.map((cardData)=>{
                return(
                    <DemoCard heading={cardData.heading}
                        img={cardData.img}
                        key={cardData.heading}
                    />
                )
            })
        }
        </div>
    </div>
  )
}

export default Demo