import React, { useState } from 'react';

// The TabContent component receives the content for a tab as a prop and renders it
const TabContent = ({ content }) => <div>{content}</div>;

const TabComponent = () => {
  // Declare a state variable called `selectedTab`
  const [selectedTab, setSelectedTab] = useState('Strategy');

  // Declare an object with the content for each tab
  const tabs = {
    Strategy: 'Strategy',
    Design: 'Design',
    Content: 'Content',
    Development: 'Development',
  };

  //Add elements to content object




  // Declare an object with the content for each tab
  const content = {
    Strategy: 'Brand strategy, Design strategy, UX strategy, Social Media strategy',
    Design: 'Identity Design, Web & UI Design, Content Design, Social Media Design',
    Content: 'Copywriting, Campaign Content, Web & Social Content, Marketing Content',
    Development: 'Custom Front-end, Custom CMS, Platform Builds, Progressive Web Applications',
  };

  // Declare an object with the content for another tab
  const tabsNumbers = {
    Strategy: '01',
    Design: '02',
    Content: '03',
    Development: '04',
  };

  // Render the tab buttons and the content for the selected tab
  return (
    <>
            <div className="custom--bg--dark absolute -bottom-100 left-1/2 -translate-x-2/3 w-[516px] h-[516px] rounded-full blur-[200px] md:blur-[100px] opacity-75"></div>
       <div name='work' className='bg-[#fafafa] w-full h-[800px] text-[#474554]'>
        <div className='max-w-[1800px] mx-auto p-4 flex flex-col justify-center w-full'>
            <div className='pb-8'>
        </div>

        {/*Container*/}
        <div className='grid sm:grid-cols-1 md:grid-cols-8 gap-4 text-[#474554]'>

                {/*Grid item */}
                <div 
                className='group container flex justify-center text-left big--number'>
                  <h1><TabContent content={tabsNumbers[selectedTab]} /></h1>
               
                </div>

                 {/*Grid item */}
                 <div 
                className='group container flex justify-center text-left big--number'>
                
               
                </div>
                  {/*Grid item */}
                  <div 
                className='group container flex justify-center text-left big--number'>
                
               
                </div>
                  {/*Grid item */}
                  <div 
                className='group container flex justify-center text-left big--number'>
                
               
                </div>



            <div 
                className='group container justify-center items-center description--content'>
                <p className='text-5xl font-bold inline text-[#474554]'>What i do</p>
                  <h2><TabContent content={tabs[selectedTab]} /></h2>
             <div>
             {Object.keys(tabs).map(tab => (
               <button className='button--tabs' key={tab} onClick={() => setSelectedTab(tab)}>
                 {tab}
               </button>
             ))}
             </div>
             <div className='list--description'>
           
             <p className='text-3xl bold mr-36 pt-4 pb-4 mb-4 text-[#474554]'><TabContent content={content[selectedTab]} /></p>
           
             </div>   
            
            </div>
            {/*Grid item */}
           

            
           

    </div>
    </div>
    </div>
    </>
    
   
  );
};

export default TabComponent;
