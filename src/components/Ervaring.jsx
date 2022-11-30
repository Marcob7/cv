import React from 'react'
import belastingdienst from '../Assets/Logo_Belastingdienst.png';
import Mediamarkt from '../Assets/Media_Markt.png';
import Fotovakschool from '../Assets/fotovakschool.png';
import Ziut from '../Assets/Ziut.png';
import Ahold from '../Assets/albert-heijn.png';

const Ervaring = () => {
  return (
  <>

    <div name='ervaring' className='w-full h-screen bg-[#252525] text-gray-300 pt-8'>
        <div>

            {/*Container*/}
            <div className='max-w-[1300px] height-auto mx-auto p-4 pt-12 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-5xl font-bold inline border-b-4 border-[#8685ef]'>Experience</p>
                    <p className='py-4'>// These are companies i worked with.</p>
                </div>
                <div className="hidden md:block md:overflow-hidden md:mt-4 md:pb-14">
                <div className="flex items-center text-left gap-x-10 reveal"> 
                            <img alt="belastingdienst" src={belastingdienst} width={175} />
                            <img alt="belastingdienst" src={Fotovakschool} width={175} />
                            <img alt="belastingdienst" src={Mediamarkt} width={175} />
                            <img alt="belastingdienst" src={Ahold} width={75} />
                            <img alt="belastingdienst" src={Ziut} width={175} />
                         
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

                
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-12'>
                

                   {/*First column*/} 
                   <div className='mt-5'>
                    <p className='flex'>
                        <svg className="mr-2 mt-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg>Work experience</p>
                    <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-white/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[400px] h-[50px]">
                        <h3><span class="text-base font-bold">Belastingdienst</span> <span class="text-xs"></span></h3>
                        <p>Front end developer - ICT888 and Digital experience (jan 2019 - current)</p> 
                        </div>
                     </div> 
                     </div>

                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-white/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[400px] h-[50px]">
                        <h3><span class="text-base font-bold">Belastingdienst</span> <span class="text-xs"></span></h3>
                        <p>UX Designer - ICT888 and Digital experience (jan 2019 - current)</p> 
                        </div>
                     </div>
                     </div>


                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-white/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[400px] h-[50px]">
                        <h3><span class="text-base font-bold">Media Markt Apeldoorn</span> <span class="text-xs"></span></h3>
                        <p>Sales empoyee and advisor ktv and hifi (feb 2016 - feb 2018)</p> 
                        </div>
                     </div>
                     </div>

                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-white/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[400px] h-[50px]">
                        <h3><span class="text-base font-bold">Fotovakschool Apeldoorn</span> <span class="text-xs"></span></h3>
                        <p>UX Designer - ICT888 and Digital experience (feb 2017 - juli 2017)</p> 
                        </div>
                     </div>
                     </div>
                     
                     

                  



                     </div>
                  
                     <div>
                    {/*Second column*/}
                    <p className='flex mt-5'>
                    <svg className="mr-2 mt-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
                    Studies</p>
                    <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-white/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[400px] h-[50px]">
                        <h3><span class="text-base font-bold">Hogeschool van Arnhem en Nijmegen (HAN)</span> <span class="text-xs"></span></h3>
                        <p>Bachelor of science - Communication & multi media design (sept 2014 - juli 2018)</p> 
                        </div>
                     </div>
                     </div>

                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-white/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[400px] h-[50px]">
                        <h3><span class="text-base font-bold">Hogeschool van Arnhem en Nijmegen (HAN)</span> <span class="text-xs"></span></h3>
                        <p>Minor scripting for designers completed (sept 2017 - feb 2018)</p> 
                        </div>
                     </div>
                     </div>

                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-white/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[400px] h-[50px]">
                        <h3><span class="text-base font-bold">Aventus Apeldoorn</span> <span class="text-xs"></span></h3>
                        <p>Vestigingsmanager groot handel niveau 4 (sept 2011 - jun 2014)</p> 
                        </div>
                     </div>
                     </div>
                     
                     <div class="flex group">
                    <div class="ml-1 w-1 flex-shrink-0 bg-white/25 rounded-t"></div>
                    <div class="mt-5 ml-8 grid gap-2 pb-2">
                        <div class="relative w-[400px] h-[50px]">
                        <h3><span class="text-base font-bold">Aventus Apeldoorn</span> <span class="text-xs"></span></h3>
                        <p>Commercieel medewerker binnendienst niveu 3 (sept 2011 - jun 2014)</p> 
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