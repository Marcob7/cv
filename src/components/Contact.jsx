import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-[1000px] bg-[#fafafa] text-[#474554] flex justify-center items-center contact p-4'>
       <form method="POST" action="https://getform.io/f/a0019ec9-87bc-4bc4-82f7-5a817658e246" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
            <h2 className='text-5xl text-[#474554] font-bold inline reveal'>
              Contact
              </h2>
                <p className='text-[#474554] py-4'>Fill the form or contact me by email - Marcobuitenhuis402@hotmail.com</p>
            </div>
            <input className='bg-[#efeff1] text-[#474554] p-2' type="text" placeholder='Naam' name='name' />
            <input className='my-4 p-2 bg-[#efeff1] text-[#474554]' type="text" placeholder='E-mail' name='email'/>
            <textarea className='bg-[#efeff1] text-[#474554] p-2' name="message" rows="10" placeholder='Bericht'>

            </textarea>
            <button className='text-white border-2 hover:bg-[#8685ef] hover:border-[#8685ef] px-4 py-3 my-8 mx-auto flex items-center'>
                Let's collaborate
            </button>
        </form>  
    </div>
  )
}

export default Contact