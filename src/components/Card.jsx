import React from 'react';


const Card = ({ imageSrc, title, subtitle, text, bgCustomColor, imgWidth }) => {
  return (
    <div name='work' className='w-full h-full bg-[#fafafa] text-[#474554]'>
    <div className='bg-[#fafafa] max-w-[1600px] sm:h-[400px] h-[1200px] mx-auto flex flex-col justify-center w-full'>
    <div name='learning' className='w-full xs:h-[300px] sm:h-[1000px] md:h-[500px] bg-[#fafafa] text-gray-300 my-8'>
      <div class="flex bg-[#fafafa]">
  <div class="w-5/6">

  <div className={bgCustomColor}>
  
      <div className="w-full md:w-1/2 px-6 py-4">
      <h2 className="text-2xl text-white font-bold mb-2">{title}</h2>
          <h3 className="text-white font-medium mb-4">{subtitle}</h3>
          <p className="text-white">{text}</p>
          <div className='pt-12 flex-end'>


          <label htmlFor="my-modal-4" className="cursor-pointer">Read more</label>



</div> 
      </div>
      <div className="w-full md:w-1/2">
      <div className="m-4 absolute stats shadow">
  
  <div className="stat">
<div className="stat-title">Total Visitors</div>
<div className="stat-value">218.997</div>
<div className="stat-desc">Average visit: 3 min 18s</div>
</div>

</div>
      <img className="sm:h-auto h-full " alt="Virtual reality glasses" src={imageSrc}  width={800}/>
      
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    </div>
  );
};

export default Card;
