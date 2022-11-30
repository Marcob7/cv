import React from 'react'
import workImg from '../Assets/workImg.jpeg'
import realEstate from '../Assets/realestate.jpg'
import Servicedesk from '../Assets/homepagina_servicedesk.jpg'

function Work() { 
  return (
    <>
    <div name='work' className='bg-[#252525] w-full md:h-screen text-gray-300'>
        <div className='max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-5xl font-bold inline border-b-4 text-gray-300 border-[#8685ef]'>My work</p>
            <p className='py-6'> // Read about my most recent work at the Belastingdienst</p>
        </div>
      
        {/*Container*/}
        <div className='grid sm:grid-cols-4 md:grid-cols-2 gap-4 reveal'>

                {/*Grid item */}
                <div 
                style={{ backgroundImage: `url(${Servicedesk})` }}
                className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                
                {/*Hover effexts */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-1xl font-bold text-white tracking-wider flex justify-center'>
                    Selfservice portal ICT-Servicedesk
                </span> 
                <span className='text-sm px-4 py-4 flex justify-center'>
                    <p> A fully functional selfservice portal in production with alot of expanded funcationalities like a chat or callback widget, an API that shows information about the waiting time, forms that can be send to a registration tool and more.
                      
                        <br></br><small>(Article is in dutch).</small></p>
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://www.ubrijk.nl/actueel/nieuws/2021/12/16/van-afstudeeropdracht-tot-digitale-doe-het-zelfservice">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Read more</button>
                    </a>
                </div> 

                </div>
            </div>

            <div 
                style={{ backgroundImage: `url(${realEstate})` }}
                className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                
                {/*Hover effexts */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-1xl font-bold text-white tracking-wider'>
                    Genesys widget chat & callback
                </span> 
                <div className='pt-8 text-center'>
                    <a href="./">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="./">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>

                </div>
            </div>
            {/*Grid item */}
           

            
           

    </div>

    </div>
   
    </div>
   
    </>
  )
}

export default Work