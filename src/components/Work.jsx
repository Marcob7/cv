import React from 'react'
import workImg from '../Assets/workImg.jpeg'
import Servicedesk from '../Assets/homepagina_servicedesk.jpg'
import Glasses from '../Assets/glasses.png';

function Work() { 
  return (
    <>
    <div name='work' className='bg-[#252525] w-full md:h-[1800px] text-gray-300'>
        <div className='max-w-[1600px] mx-auto p-4 flex flex-col justify-center w-full'>
            <div className='pb-8'>
            <p className='text-5xl font-bold inline border-b-4 text-gray-300 border-[#8685ef]'>Selected projects</p>
            <p className='py-6'>Take a look at the projects i worked on</p>
        </div>
      
        {/*Container*/}
        <div className='sm:grid-cols-1 md:grid-cols-1 gap-4 reveal'>

                {/*Grid item */}
            <div className='flex container--belastingdienst mb-4'>
            <div className='container--text w-[800px] h-auto bg-[#350e6a] p-[25px]'>
            <h1 className=''>Article</h1>
            <br></br>
            <h1 className='text-3xl bold'>Read about my most recent work at de Belastingdienst. </h1>
            <p className='pt-4'>A fully functional portal for selfservice by finding your solution, contact with chat or callback, and a form to send your service requests.</p>
            <div className='mt-24 flex-end'>
            <button className='button--card'>Read more</button>
            </div>
            </div>
            <div className='container--image'>
            <img alt="Servicedesk" width={720} src={Glasses}/>
            </div>
                 
            </div>

            <div className='flex container--belastingdienst mb-4'>
            <div className='container--text w-[800px] h-[380px] bg-[#4a5f74] p-[25px]'>
            <h1 className=''>API Management</h1>
            <br></br>
            <h1 className='text-3xl bold'>I connect things.  </h1>
            <p className='pt-4'>By using api's i made it possible to show data to the end-users in a nice looking way. Oh. And by creating forms that take requests and places them directly in a registration tool.</p>
            <div className='mt-24 flex-end'>
            
            </div>
            </div> 
            <div className='container--image'>
            <img alt="Glasses" width={720} src={Glasses}/>
            </div>
                 
            </div>

            <div className='flex container--belastingdienst mb-4'>
            <div className='container--text w-[800px] h-[380px] bg-[#0807de] p-[25px]'>
            <h1 className=''>UX Design</h1>
            <br></br>
            <h1 className='text-3xl bold'>I design things.</h1>
            <p className='pt-4'>By using api's i made it possible to show data to the end-users in a nice looking way. Oh. And by creating forms that take requests and places them directly in a registration tool.</p>
            <div className='mt-24 flex-end'>
            
            </div>
            </div> 
            <div className='container--image'>
            <img alt="Glasses" width={720} src={Glasses}/>
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