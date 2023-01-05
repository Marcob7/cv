import React from 'react'
//import {HiArrowNarrowRight} from 'react-icons/hi'
import ProfilePic from '../Assets/profilephoto.jpg';
//import Goo from 'gooey-react';

const Home = () => {

  return (
    <> 
    


    <div name='home' className='w-full h-screen svg-background text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1600px] w-full grid grid-cols-2 gap-8'>
      
            <div>
            </div>
        </div> 
        
        <div className='max-w-[1300px] w-full grid sm:grid-cols-2 gap-4 px-4'>
            <div className='sm:text-left text-4xl font-bold'>
            <div className='text-left'>
            <p className='text-[#cce1f6] text-sm'>Hello, my name is,</p>
            </div>
            <h1 className='text-4xl sm:text-4xl font-bold text-[#d1dfed]'>Marco Buitenhuis</h1>
        <h2 className='text-4xl sm:text-3xl font-bold text-[#8892b0]'>I am a Front-end developer & UX designer</h2>
        <div className='sm:text-left text-sm py-4'>
        <p>The best from both. An unique combination. My specialty is making outstanding digital experiences. At the moment i'm focussed at coding, and designing responsive web applications. 
        </p>
            </div>   
            <div className='text-sm flex items-center py-4'>
            <button className='group px-4 py-3 mr-2 flex items-center hover:bg-[#8685ef] hover:border-[#8685ef]'>
                Download my resume
              
                </button>
               <button className='group px-4 py-3 mr-2 flex items-center hover:bg-[#8685ef] hover:border-[#8685ef]'>
                Take a look at my work
               
                </button>
            </div>
            </div>
            <div>
              
            <div className="flex flex-wrap justify-center">
  
                <div className="w-1/2">
                  <img src={ProfilePic} alt="profielfoto" className="border:radius-[5px] shadow-lg rounded max-w-full h-auto align-middle border-none" />

                </div> 
    

                </div>
                </div>   
        </div>
     
    </div>
</div>

</>
  ) 
} 

export default Home