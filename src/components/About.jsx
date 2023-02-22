import React from 'react'
//import banner from '../Assets/banner.png'; 
import Javascript from '../Assets/javascript-logo.png';
import Figma from '../Assets/figma-logo.png';
import Tailwind from '../Assets/tailwind.png';
import ReactLogo from '../Assets/react-logo.png';
import VueLogo from '../Assets/vue.png';
import PythonLogo from '../Assets/python.png';
import BootstrapLogo from '../Assets/bootstrap-logo.png';

const About = () => {
  return (
    <>
    <div name='about' className='w-full xs:h-[1000px] sm:h-[1000px] md:h-[1000px] h-full bg-[#fafafa] text-gray-300 pt-24'>
        <div className='flex flex-col justify-center items-center'>
        
            <div className='lg:max-w-[1600px] lg:mt-0 sm:mt-8 w-full grid md:grid-rows-2 md:grid-cols-4 sm-grid-cols-1 gap-8 px-4'>
               {/*grid*/} 
            <div className='lg:mt-0 sm:mt-20 sm:text-left'>
                <h2 className='text-5xl font-bold inline reveal text-[#474554]'>
                About me 
                </h2> 
                <p className='mt-10 text-[#474554]'>
                  Currently I'm working on different projects with a lot of passion. I am specialized in UX design, but I'm also an experienced front-end developer. 
                 
                <br></br><br></br> My goal is to make life a little bit easier. I enjoy developing or designing programs for clients on a scale from individual level to big companies like 'de Belastingdienst'. 
               <br></br>
                This in combination with good design choises will make sure that the clients get the solutions they deserve.
                </p>
                </div> 

               
               
                
                
                {/*grid*/}
               <div className='text-[#474554]'>
             
                <div className='h-[130px] bg-[#f2f2f2] p-4 mb-4 rounded relative group'>
                <div class="flex flex-col gap-1"><span class="font-medium">JavaScript</span><p class="text-xs font-light dark:text-light-500 leading-[1.1rem]">In the past i have worked alot with Javascript without any libraries. Also this was our most common language i had to work with.</p></div>
                <div class="absolute z-10 -right-2 -top-2 w-8 h-8 rounded overflow-hidden shadow">
                    <img src={Javascript} className="w-full h-full object-cover" alt="technology logo" />
                </div>
               </div>
               <div className='h-[130px] bg-[#f2f2f2] p-4 mt-4 mb-4 rounded relative group'>
                <div class="flex flex-col gap-1"><span class="font-medium">React</span><p class="text-xs font-light dark:text-light-500 leading-[1.1rem]">This website is made with Vite and React. I have been practising React and Next.js in my free time and i really like it.</p></div>
                <div class="absolute z-10 -right-2 -top-2 w-8 h-8 rounded overflow-hidden shadow">
                    <img src={ReactLogo} className="w-full h-full object-cover" alt="technology logo" />
                </div>
               </div>
               <div className='h-[130px] bg-[#f2f2f2] p-4 mt-4 mb-4 rounded relative group'>
                <div class="flex flex-col gap-1"><span class="font-medium">Tailwind</span><p class="text-xs font-light dark:text-light-500 leading-[1.1rem]">I mostly use Tailwind for my styling needs and i advice everyone to do so. It's easy to learn and beginner friendly.</p></div>
                <div class="absolute z-10 -right-2 -top-2 w-8 h-8 rounded overflow-hidden shadow">
                    <img src={Tailwind} className="w-full h-full object-cover" alt="technology logo" />
                </div>
               </div>
               <div className='h-[130px] bg-[#f2f2f2] p-4 mt-4 mb-4 rounded relative group'>
                <div class="flex flex-col gap-1"><span class="font-medium">Figma/Adobe Photoshop</span><p class="text-xs font-light dark:text-light-500 leading-[1.1rem]">Figma and Adobe Photoshop are my go-to design tools whenever i need to make a design. I have alot of experience using both tools.</p></div>
                <div class="absolute z-10 -right-2 -top-2 w-8 h-8 rounded overflow-hidden shadow">
                    <img src={Figma} className="w-full h-full object-cover" alt="technology logo" />
                </div>
               </div>
               </div>
             
               <div className='text-[#474554]'>
               <div className='h-[130px] bg-[#f2f2f2] p-4  mb-4rounded relative group'>
                <div class="flex flex-col gap-1"><span class="font-medium">Vuejs</span><p class="text-xs font-light dark:text-light-500 leading-[1.1rem]">This library was also used at my work. With vue and axios i managed to get some api's working for the public.</p></div>
                <div class="absolute z-10 -right-2 -top-2 w-8 h-8 rounded overflow-hidden shadow">
                    <img src={VueLogo} className="w-full h-full object-cover" alt="technology logo" />
                </div>
               </div>
               <div className='h-[130px] bg-[#f2f2f2] p-4 mt-4 mb-4 rounded relative group'>
                <div class="flex flex-col gap-1"><span class="font-medium">Python</span><p class="text-xs font-light dark:text-light-500 leading-[1.1rem]">Back in the day i loved working with python as it is easy to learn. I made my first backend in it with Django and Wagtail CMS.</p></div>
                <div class="absolute z-10 -right-2 -top-2 w-8 h-8 rounded overflow-hidden shadow">
                    <img src={PythonLogo} className="w-full h-full object-cover" alt="technology logo" />
                </div>
               </div>
               <div className='h-[130px] bg-[#f2f2f2] p-4 mt-4 mb-4 rounded relative group'>
                <div class="flex flex-col gap-1"><span class="font-medium">Bootstrap</span><p class="text-xs font-light dark:text-light-500 leading-[1.1rem]">Over at de Belastingdienst they are using bootstrap for styled components that can be reusable in a design library. It's also worth noting that the components they offer are great aswell.</p></div>
                <div class="absolute z-10 -right-2 -top-2 w-8 h-8 rounded overflow-hidden shadow">
                    <img src={BootstrapLogo} className="w-full h-full object-cover" alt="technology logo" />
                </div>
               </div>
              
             
               
               </div>


               <div className='text-[#474554]'>
                <div className='flex flex-col gap-3 lg:col-start-2 lg:row-span-2 h-max lg:row-start-1'>
                    <div className='flex flex-col gap-5 bg-[#f2f2f2] bg-light-600 p-4 rounded shadow-md'>
                        <div className='flex flex-col gap-0.5'>
                            <span className='text-[#474554] text-xs'>
                                <div className='flex gap-2 flex-wrap'>
                                    <strong className='px-2 py-0.5 border-[1.5px] dark:border-light-500 border-gray-400 dark:text-light-500 text-[#474554] rounded-full font-normal'>Front end Development 👨‍💻</strong>
                                    <strong className='px-2 py-0.5 border-[1.5px] dark:border-light-500 border-gray-400 dark:text-light-500 text-[#474554] rounded-full font-normal'>UI Design 📱</strong>
                                    <strong className='px-2 py-0.5 border-[1.5px] dark:border-light-500 border-gray-400 dark:text-light-500 text-[#474554] rounded-full font-normal'>Graphic Design 🎨</strong>
                          
                                </div>
                            </span>
                        </div>

                        <div className='flex flex-col gap-0.5'> 
                            <span className='text-sm font-medium'>
                                Location
                            </span>
                            <span className='dark:text-light-500 text-[#474554] text-xs'>
                                <div className='flex items-center gap-2'>
                                <address class="not-italic ">Netherlands, Apeldoorn</address>
                                </div>
                            </span>
                        </div>

                        <div className='flex flex-col gap-0.5'>
                        <span class="text-sm font-medium">Email</span>
                        <span className='dark:text-light-500 text-[#474554] text-xs'>
                        <div><a href="mailto:Marcobuitenhuis402@hotmail.com">Marcobuitenhuis402@hotmail.com</a>
                        </div>
                        </span>
                        </div>

                        <div className='flex flex-col gap-0.5'>
                        <span class="text-sm font-medium">Phone Number</span>
                        <span class="dark:text-light-800 text-[#474554] text-xs"><div><a href="tel:+98-903-300-7793">+31 629825290</a></div></span>
                        </div>

                        <div className='flex flex-col gap-0.5'>
                        <span class="text-sm font-medium">Education</span>
                        <span class="dark:text-light-500 text-[#474554] text-xs"><div class="flex flex-col"><span>Communication & Multi Media Design</span><span>- Hogeschool van HAN en Nijmegen</span></div></span>
                        </div>

                        <div className='flex flex-col gap-0.5'>
                        <span class="text-sm font-medium">Languages</span>
                        <span class="dark:text-light-800 text-[#474554] text-xs"><div class="flex gap-2 flex-wrap">
                        <strong class="px-2 py-0.5 border-[1.5px] dark:border-light-500 border-gray-400 dark:text-light-500 text-[#474554] rounded-full font-normal">Dutch</strong>
                        <strong class="px-2 py-0.5 border-[1.5px] dark:border-light-500 border-gray-400 dark:text-light-500 text-[#474554] rounded-full font-normal">English</strong></div></span>
                        </div>

                        <a href="mailto:marcobuitenhuis402@hotmail.com" class="glow-on-hover rounded flex justify-center items-center text-light-500 transition-colors hover:text-light-300 text-sm py-2 bg-[#fafafa] text-[#474554]">Contact me</a>
                    </div> 
                </div>
               </div>
                   
               
               
            </div>
        </div>
    </div>
    <div>
  
    </div> 
 
    </>
  )
}
 
export default About