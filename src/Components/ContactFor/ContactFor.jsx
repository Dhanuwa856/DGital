import React from 'react'

function ContactFor() {
  return (
    <div className='mt-20'>
      <div className="mini-title w-max mx-auto">
        <span>CONTACT US</span>
      </div>
      <h3 className="text-center font-bold text-dark mt-5 text-4xl">
      Contact For Any Query
      </h3>
      <p className='mt-6 text-center w-[48%] mx-auto text-lg text-[#777]'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://www.upwork.com/freelancers/~01386d08f6baa0d69c" className='text-primary'> Download Now.</a> </p>
      <form action="/" className='w-[50%] mx-auto block mt-5 contact-input'>
        <div className='flex w-full gap-3'>
          <input type="text" name="" id="" placeholder='Your Name' className='w-1/2 h-[50px] rounded-lg border-[#ddd]' required/>
          <input type="email" name="" id="" placeholder='Your Email'className='w-1/2 h-[50px] rounded-lg border-[#ddd]' required/>
        </div>
        <input type="text" placeholder='Subject' className='w-full mt-4 h-[50px] rounded-lg border-[#ddd]'/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='w-full mt-4 rounded-lg h-[200px] border-[#ddd]'></textarea>
        <button type="submit" className='mt-4 bg-primary w-full rounded-lg text-light font-medium text-lg py-3 '>Send Message</button>
      </form>
    </div>
  )
}

export default ContactFor