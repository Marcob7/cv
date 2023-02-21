import React,  { useState } from 'react'
import workImg from '../Assets/workImg.jpeg'
import Servicedesk from '../Assets/homepagina_servicedesk.jpg'
import Glasses from '../Assets/glasses.png';
import Article from '../Assets/Article.png';
import Vrglasses from '../Assets/Vrglasses.jpg';
import smartphones from '../Assets/smartphones.png';
//import Belastingdienst from '../Assets/belastingdienst-logo.png';

  
function Work() { 


  return (
    <div className='pt-24 bg-[#fafafa] w-full h-full text-[#474554] z-[1]'>
    <div name='work' className='bg-[#fafafa] w-full h-full text-[#474554] z-[1]'>
   <div className='max-w-[1600px] mx-auto p-4 flex flex-col justify-center w-full'>
       <div className='pb-8'>
       <p className='text-5xl font-bold inline text-[#474554] reveal'>Selected projects</p>
       <p className='py-6'>Take a look at the projects I worked on</p>
   </div>
   
   {/*Container*/}
   <div className='sm:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 reveal'>
  
           {/*Grid item */}
       <div className='flex container--belastingdienst h-auto mb-4 text-[#474554]'>
       <div className='container--text w-[800px] bg-[#efeff1] p-[25px]'>   
       <h1 className=''>Article</h1>
       <br></br>
       <h1 className='text-3xl bold'>Read about my most recent work at de Belastingdienst. </h1>
       <p className='pt-4'>A fully functional portal for selfservice by finding your solution, contact with chat or callback, and a form to send your service requests.</p>
       <small>(Article is in dutch)</small>
    
       <div className='mt-24 flex-end'>
     {/* The button to open modal */} 
   
<label htmlFor="my-modal-4" className="cursor-pointer">Read more</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer"> 
  <div className="modal-box modal-middle w-11/12 max-w-7xl">
  <img alt="Servicedesk" src={Article}/>
    <div className="modal-action">
      <label htmlFor="my-modal-4" className="button">Close</label>
    </div>
  </div>


</label>


      
       </div> 
      
       </div>
       <div className='container--image'>
       <div className="m-4 absolute stats shadow">
  
  <div className="stat">
<div className="stat-title">Total Page Views</div>
<div className="stat-value">592.135</div>
<div className="stat-desc"></div>
</div>

</div>
       <img className='sm:h-auto h-full' alt="smartphones background" src={smartphones} width={800}/>
       </div>
            
       </div>

       <div className='flex container--belastingdienst h-auto mb-4 text-[#e3e3e6]'>
       <div className='container--text w-[800px] bg-[#4a5f74] p-[25px]'>
       <h1 className=''>API Management</h1>
       <br></br>
       <h1 className='text-3xl bold'>I connect things.  </h1>
       <p className='pt-4'>By using api's I made it possible to show data to the end-users in a nice looking way. Oh. And by creating forms that take requests and places them directly in a registration tool.</p>
       <div className='mt-24 flex-end'>

       <label htmlFor="my-modal-4" className="cursor-pointer">Read more</label>
       </div> 
       </div> 
       <div className='container--image'>
       <div className="m-4 absolute stats shadow">
  
  <div className="stat">
<div className="stat-title">Total Visitors</div>
<div className="stat-value">218.997</div>
<div className="stat-desc">Average visit: 3 min 18s</div>
</div>

</div>
       <img className="sm:h-auto h-full" alt="Glasses" src={Glasses} width={800} />
      
       </div>
            
       </div>

       <div className='flex container--belastingdienst sm:h-auto h-[150px] mb-4 text-[#e3e3e6]'>
       <div className='container--text w-[800px] bg-[#0807de] p-[25px]'>
       <h1 className=''>UX Design</h1> 
       <br></br>
       <h1 className='text-3xl bold'>I design things.</h1>
       <p className='pt-4'>Working with Adobe Photoshop or Figma to create design libraries, styled components and more is what I love to do. One of the things I mention about myself is that I'm very creative.</p>
       <div className='mt-24 flex-end'>
       <label htmlFor="my-modal-4" className="cursor-pointer">Read more</label>
       </div>
       </div> 
       <div className='container--image'>

       <img className="sm:h-auto h-full " alt="Virtual reality glasses" src={Vrglasses} width={800}/>
       </div>
            
       </div>
      
       {/*Grid item */}
      
       
      
</div>

</div>

</div>
 
</div>
  );
}


export default Work