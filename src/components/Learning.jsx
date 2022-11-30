import React from 'react'
//import surfing from '../Assets/surfing.png'; 
import video from '../Assets/robot.mp4';

const About = () => {
  return (
    <>
    <div name='about' className='w-full h-screen bg-[#252525] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full'>
        <div className='max-w-[1300px] w-full px-4'>
           
    <article class="services-card">
     
     <div class="services-card__content">
     <h3 className='text-5xl font-bold inline reveal'>
     I like to try and learn new things
                </h3> 
     
       <div class="services-card__text">
       Keeping up to date with the latest tech is my go-to passion. I always keep an eye out for new frameworks or designsto keep up to date and work with the best technology.
       </div>
     </div>
     <figure class="services-card__img">
       <span class="services-card__tag tag">Line follower robot</span>
       <video
       id="my-video"
       class="video-js"
       muted
       controls
       preload="auto"
       autoPlay="on"
       width="340"
       height="auto"
       poster="MY_VIDEO_POSTER.jpg"
       data-setup="{}"
     >
       <source src={video} type="video/mp4" />
       <source src={video} type="video/webm" />
       <p class="vjs-no-js">
         To view this video please enable JavaScript, and consider upgrading to a
         web browser that
         <a href="https://videojs.com/html5-video-support/" target="_blank"
           >supports HTML5 video</a
         >
       </p>
     </video>
    
     </figure>
   </article>
               
        </div>
         
        </div>
    </div>
 
 
    </>
  )
}
 
export default About