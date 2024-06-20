import React from 'react'

function ContactUs() {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-center gap-20 lg:h-[80vh] h-full p-[10%]'>
        <div className='get-in-touch justify-center flex flex-col w-full lg:w-[90%] gap-10'>
            <div className='flex flex-col'>
                <h5 className='text-xl font-[800] text-[#070958]'>Contact Us</h5>
                <h1 className='text-4xl font-extrabold text-[#FF5B2F]'>Get in touch</h1>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque voluptate vero beatae dignissimos illo adipisci suscipit tempora ut nulla? Cumque fugiat laudantium quisquam magni? Expedita aut, facilis laudantium, blanditiis delectus, dolorem dolor illo placeat quibusdam at repellat vel quasi aperiam nisi animi optio assumenda atque labore totam provident qui.</p>
            <div className='flex flex-row gap-10'>
                <button className='bg-[#FF5B2F] text-[#ffff] px-5 py-2 lg:text-[18px] lg:px-10 lg:py-4 rounded-[50px] hover:bg-[#FF5B2F]'>Appointment</button>
                <div className='flex flex-col justify-center pointer items-center '>
                    <a href="" className=' border-b-2 p-[3px] border-[#070958] flex items-center justify-center gap-3 flex-row text-[12px]'>FAQs Page <i className='material-icons bg-[#070958] text-white rounded-2xl decoration-0'>chevron_right</i></a>
                </div>
            </div>
        </div>
        <div className='contact-form-container bg-[#fff6ed] px-10 py-10 rounded-lg border border-300 border-[#ffc2b1] w-[100%] lg:w-full'>
            <form className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5 lg:flex-row'>
                    <input type="text" className='outline-none border border-300 border-[#ffc2b1] rounded-[50px] p-4 first-name' placeholder='First Name' required/>
                    <input type="text" className='outline-none border border-300 border-[#ffc2b1] rounded-[50px] p-4 last-name' placeholder='Last Name' />
                </div>
                <input type="email" className='outline-none border border-300 border-[#ffc2b1] rounded-[50px] p-4 email' placeholder='Email' required/>
                <textarea name="message" id="message" placeholder="message" class="outline-none w-full h-40 border border-300 border-[#ffc2b1] rounded-md resize-y text-base rounded-[40px] p-4 py-4" required></textarea>
                <div className='flex justify-center align-center'>
                    <button type="submit" className='bg-[#FF5B2F] text-[#ffff] px-10 py-4 rounded-[50px] hover:bg-[#FF5B2F]'>Send Message</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactUs;