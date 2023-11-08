import React from 'react'

export default function Login() {
  return (
    <div className='max-w-7xl mx-auto h-screen grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col p-20 justify-center'>
            <h1 className='headline_text mb-10'>Start Buying Now</h1>

            <form className='items-left w-full'>
                <div className='flex flex-col mb-4 '>
                    <label htmlFor='name' className='label_text'>Name</label>
                    <input type="text" className='input' placeholder='Enter your name'/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label htmlFor='email' className='label_text'>Email Address</label>
                    <input type="text" className='input' placeholder='Enter your email'/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label htmlFor='password' className='label_text'>Password</label>
                    <input type="text" className='input' placeholder='password'/>
                </div>

                {/* terms and policy */}
                <div className='flex gap-2'>
                    <input type='checkbox' value="agreed" />
                    <p className='body_text'>I agree to the <a href="#">terms & policy</a></p>
                </div>
            </form>
        </div>
        
        <div className='bg-slate-400'></div>
    </div>
  )
}
