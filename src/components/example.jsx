import React, { useState } from 'react';

// The TabContent component receives the content for a tab as a prop and renders it
const TabContent = ({ content }) => <div>{content}</div>;

const TabComponent = () => {

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
    Strategy: 'How would I go by releasing my product? When should I do so? By using a good design and UX strategy I can help to make sure clients get the right roadmap, content or design on time.',
    Design: 'Identity Design, Web & UI Design and Content Design are all things I would like to add when it comes to creating a new design. By doing so designs, prototypes and apps get the right, -and thought out styled components.',
    Content: 'Copywriting, Campaign Content, Web & Social Content and Marketing Content are things that provide some identity to your design. With my expertise we can talk about how we want to communicate and express ourselfs. Im here to help you with this.',
    Development: 'Custom Front-end, Custom CMS, Platform Builds and Progressive Web Applications are my go-to skills. Lets build something together.',
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
        <div className="custom--bg--dark h-[1000px] absolute -bottom-100 left-1/2 -translate-x-2/3 w-[516px] rounded-full blur-[200px] md:blur-[100px] opacity-75"></div>
       <div name='work' className='bg-[#fafafa] w-full h-[1200px] text-[#474554]'>
        <div className='max-w-[1800px] h-full mx-auto p-4 flex flex-col justify-center w-full'>
            <div className=''>
        </div>

        {/*Container*/}
        <div className='grid sm:grid-cols-1 md:grid-cols-8 gap-4 text-[#474554] sm:h-full h-[400px]'>

                {/*Grid item */}
                <div 
                className='flex text-left text-[#474554] sm:text-[25em] text-[15em]'>
                  <h1><TabContent content={tabsNumbers[selectedTab]} /></h1>
               
                </div>

                 {/*Grid item */}
                 <div 
                className=''>
                
               
                </div>
                  {/*Grid item */}
                  <div 
                className=''>
                
               
                </div>
                  {/*Grid item */}
                  <div 
                className=''>
                
               
                </div>



            <div 
                className='group container justify-center items-center description--content h-full sm:w-auto w-auto'>
                <p className='text-5xl font-bold inline text-[#474554] reveal'>What I do</p>
                <div className='sm:text-xl text-[8px]'>
                  <h2 className=''><TabContent content={tabs[selectedTab]} /></h2>
                  </div>
             <div className='sm:m-[0px] m-[15px]'>
             {Object.keys(tabs).map(tab => (
               <button className='button--tabs' key={tab} onClick={() => setSelectedTab(tab)}>
                 {tab}
               </button>
             ))}
             </div>
             <div className='list--description'>
           
             <p className='text-1xl pt-4 pb-4 mb-4 text-[#000] sm:text-1xl text-[16px]'><TabContent content={content[selectedTab]} /></p>
             
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
