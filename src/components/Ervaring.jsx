import React from 'react'
import belastingdienst from '../Assets/Belastingdienst-logo.png';
import Mediamarkt from '../Assets/Media_Markt.png';
import Fotovakschool from '../Assets/FotovakschoolLogo_fc.png';
import Ziut from '../Assets/Ziut.png';
import Ahold from '../Assets/albert-heijn.png';

const Ervaring = () => {
  return (
  <>

    <div name='experience' className='w-full h-full bg-[#fafafa] text-[#474554]'>
        <div> 
        
            {/*Container*/}
            <div className='max-w-[1600px] sm:h-[1000px] h-[1200px] mx-auto pt-24 flex flex-col bg-[#fafafa] justify-center w-full'>
                <div>
                    <p className='sm:p-[0px] p-[15px] sm:text-5xl text-lg font-bold inline reveal'>Experience</p>
                    <p className='sm:p-[0px] p-[15px] py-4'>These are companies I worked at.</p>
                </div>
                <div className="sm:block md:mt-4">
                <div className="sm:flex sm:items-center mx-10 grid grid-cols-5 grid-rows-1 text-left gap-x-10"> 

                            <img alt="Belastingdienst logo" src={belastingdienst} width={175} />
                            <img alt="Fotovakschool logo" src={Fotovakschool} width={175} />
                            <img alt="Mediamarkt logo" src={Mediamarkt} width={175} />
                            <img alt="Albert heijn logo" src={Ahold} width={75} />
                            <img alt="Ziut logo" src={Ziut} width={175} />
                         
                           {/*  <img src="/images/companies/st-jude.png" alt="St. Jude" style="height: 61px">
                            <img src="/images/companies/warner-bros.png" alt="Warner Bros" style="height: 37px">
                            <img src="/images/companies/about-you.png" alt="About You" style="height: 28px">
                            <img src="/images/companies/disney.png" alt="Disney" style="height: 39px">
                            <img src="/images/companies/the-new-york-times.png" alt="The New York Times" style="height: 31px">
                            <img src="/images/companies/wwe.png" alt="WWE" style="height: 42px">
                            <img src="/images/companies/bankrate.png" alt="Bankrate" style="height: 24px">
                            <img src="/images/companies/twitch.png" alt="twitch" style="height: 32px"> */}
                    </div>
                </div>

                
                <div className='md:grid-cols-2 md:grid-rows-2 grid grid-cols-1 grid-rows-1 gap-12'>
                

                   {/*First column*/} 
                   <div className='sm:text-base text-[11px] mt-5'>
                    <p className='flex'>
                        <svg className="mr-2 mt-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg>Work experience</p>
                    <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-black/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[300px] h-[50px]">
                        <h3><span class="text-base font-bold">Belastingdienst</span> <span class="text-xs"></span></h3>
                        <p>Front end developer and UX Designer - ICT888 and Digital experience (jan 2019 - current)</p> 
                        </div>
                     </div> 
                     </div>

                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-black/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[300px] h-[50px]">
                        <h3><span class="text-base font-bold">Belastingdienst / Graduation</span> <span class="text-xs"></span></h3>
                        <p>End research and high-fidelity prototype - Communication and Multi Media Design -  (jan 2017 - Jun 2017)</p> 
                        </div>
                     </div>
                     </div>


                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-black/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[300px] h-[50px]">
                        <h3><span class="text-base font-bold">Media Markt Apeldoorn</span> <span class="text-xs"></span></h3>
                        <p>Sales empoyee and advisor ktv and hifi (feb 2016 - feb 2018)</p> 
                        </div>
                     </div>
                     </div>

                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-black/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[300px] h-[50px]">
                        <h3><span class="text-base font-bold">Fotovakschool Apeldoorn</span> <span class="text-xs"></span></h3>
                        <p>UX Designer - ICT888 and Digital experience (feb 2017 - juli 2017)</p> 
                        </div>
                     </div>
                     </div>
                     
                     

                  



                     </div>
                  
                     <div>
                    {/*Second column*/}
                    <div className='sm:text-base text-[11px] mt-5'>
                    <p className='sm:text-base text-[11px] flex mt-5'>
                    <svg className="mr-2 mt-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
                    Studies</p>
                    <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-black/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[300px] h-[50px]">
                        <h3><span class="text-base font-bold">Hogeschool van Arnhem en Nijmegen (HAN) Graduation</span> <span class="text-xs"></span></h3>
                        <p>Bachelor of science - Communication & multi media design (sept 2014 - juli 2018)</p> 
                        </div>
                     </div>
                     </div>

                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-black/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[300px] h-[50px]">
                        <h3><span class="text-base font-bold">Hogeschool van Arnhem en Nijmegen (HAN)</span> <span class="text-xs"></span></h3>
                        <p>Minor scripting for designers completed (sept 2017 - feb 2018)</p> 
                        </div>
                     </div>
                     </div>

                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-black/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[300px] h-[50px]">
                        <h3><span class="text-base font-bold">Aventus Apeldoorn</span> <span class="text-xs"></span></h3>
                        <p>Vestigingsmanager groot handel niveau 4 (sept 2011 - jun 2014)</p> 
                        </div>
                     </div>
                     </div>
                     
                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-black/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[300px] h-[50px]">
                        <h3><span class="text-base font-bold">Aventus Apeldoorn</span> <span class="text-xs"></span></h3>
                        <p>Commercieel medewerker binnendienst niveau 3 (sept 2011 - jun 2014)</p> 
                        </div>
                     </div>
                     </div>
                     </div>
                    
                     </div>
                  
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Ervaring