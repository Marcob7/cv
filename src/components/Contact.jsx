import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#252525] flex justify-center items-center contact p-4'>
       <form method="POST" action="https://getform.io/f/a0019ec9-87bc-4bc4-82f7-5a817658e246" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
            <h2 className='text-5xl font-bold inline border-b-4 border-[#8685ef] reveal'>
              Contact
              </h2>
                <p className='text-gray-300 py-4'>// Fill the form or contact me by email - Marcobuitenhuis402@hotmail.com</p>
            </div>
            <input className='bg-[#000] p-2' type="text" placeholder='Naam' name='name' />
            <input className='my-4 p-2 bg-[#000]' type="text" placeholder='E-mail' name='email'/>
            <textarea className='bg-[#000] p-2' name="message" rows="10" placeholder='Bericht'>

            </textarea>
            <button className='text-white border-2 hover:bg-[#8685ef] hover:border-[#8685ef] px-4 py-3 my-8 mx-auto flex items-center'>
                Let's collaborate
            </button>
        </form>  
    </div>
  )
}

export default Contact