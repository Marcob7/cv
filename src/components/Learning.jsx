import React from 'react'
//import surfing from '../Assets/surfing.png'; 
import video from '../Assets/robot.mp4';


const Learning = ({ videoUrl, title, description }) => {
  return (
 <div name='learning' className='w-full xs:h-[1000px] sm:h-[1000px] md:h-[1000px] h-full bg-[#fafafa] text-gray-300'>
      <div class="flex bg-[#fafafa]">
  <div class="w-1/6"></div>
  <div class="w-4/6">
  <div className="flex flex-wrap md:flex-no-wrap items-start mx-2 md:mx-0 md:my-6 shadow-md rounded-md overflow-hidden max-h-[500px] bg-[#8685ef] my-8">
      <div className="w-full md:w-1/2 px-6 py-4">
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
      <div className="w-full md:w-1/2">
        <video preload="auto" autoplay="true"  src={video} className="w-full h-auto" type="video/mp4"/>
      
      </div>
    </div>
  </div>
  <div class="w-1/6"></div>
</div>
    </div>
  );
};

export default Learning;
