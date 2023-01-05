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
       <div name='work' className='bg-[#252525] w-full h-[800px] text-gray-300'>
        <div className='max-w-[1800px] mx-auto p-4 flex flex-col justify-center w-full'>
            <div className='pb-8'>
        </div>
      
        {/*Container*/}
        <div className='grid sm:grid-cols-1 md:grid-cols-8 gap-4 reveal'>

                {/*Grid item */}
                <div 
                className='group container flex justify-center text-left big--number reveal'>
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
                <p className='text-5xl font-bold inline border-b-4 border-[#8685ef]'>What i do</p>
                  <h2><TabContent content={tabs[selectedTab]} /></h2>
             <div>
             {Object.keys(tabs).map(tab => (
               <button className='button--tabs' key={tab} onClick={() => setSelectedTab(tab)}>
                 {tab}
               </button>
             ))}
             </div>
             <div className='list--description'>
           
             <p className='text-2xl bold mr-48 pt-4 pb-4 mb-4 text-[#aca9bb]'><TabContent content={content[selectedTab]} /></p>
           
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
