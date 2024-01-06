import React from 'react'

const Navbar =()=> {
  return (
    <div className='w-full bg-zinc-800 py-2 px-5 flex justify-between fixed border-b-black border-b border-solid z-50'>
        <div className='relative text-[24px] flex items-center'>
            <img  className='h-[18px] mt-1' src={require(`../assets/envato_market_logo.png`)} alt='envato-market-logo'/>
        </div>
        <div className='relative flex items-center mt-1'>
            <button className='text-white text-[14px] bg-lime-500 h-[32px] sm:w-[95px] 
            w-[75px] rounded-[4px] flex pt-0.5 justify-center font-medium'>
                Buy now
            </button>
        </div>
    </div>
  )
}

export default Navbar