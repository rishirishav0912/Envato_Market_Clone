import React from 'react'

const Fantastic = () => {
    return (
        <div className='w-full h-screen relative bg-zinc-300 flex pl-[10px] pr-[10px] gap-10 pt-[50px] xl:flex-row flex-col'>
            <div className='flex h-screen w-full justify-center items-center'>
                <h1 className=' text-[50px] sm:text-[70px] font-bold w-full text-center lg:w-[50%]'>FANTASTIC FEATURES</h1>
            </div>
            <div className='flex flex-wrap gap-5 w-full h-screen flex-row justify-center items-center'>
                <div className='flex flex-col h-[200px] w-[200px]'>
                    <img src={require('../assets/feature-icon-1.png')} alt='feature-icon-1'
                        className='h-[30px] w-[30px]'
                    />
                    <h1 className='text-[20px] font-bold mb-[10px]'>1-Click import</h1>
                    <p>You can get the entire Stronger theme demo content with just a single click of your mouse button.</p>
                </div>
                <div className='flex flex-col h-[200px] w-[200px]'>
                    <img src={require('../assets/feature-icon-2.png')} alt='feature-icon-2'
                        className='h-[30px] w-[30px]'
                    />
                    <h1 className='text-[20px] font-bold mb-[10px]'>No need to code</h1>
                    <p>We already did all the code work for you! Simply import the content & customize with total ease.</p>
                </div>
                <div className='flex flex-col h-[200px] w-[200px]'>
                    <img src={require('../assets/feature-icon-3.png')} alt='feature-icon-3'
                        className='h-[30px] w-[30px]'
                    />
                    <h1 className='text-[20px] font-bold mb-[10px]'>Customization</h1>
                    <p>Modify every single aspect of your site with ease, including typography, colors & a whole lot more.</p>
                </div>
                <div className='flex flex-col h-[200px] w-[200px]'>
                    <img src={require('../assets/feature-icon-4.png')} alt='feature-icon-4'
                        className='h-[30px] w-[30px]'
                    />
                    <h1 className='text-[20px] font-bold mb-[10px]'>Help center</h1>
                    <p>Browse the Knowledge Base articles, view the theme user guide or reach out to our support team.</p>
                </div>
            </div>
        </div>
    )
}

export default Fantastic