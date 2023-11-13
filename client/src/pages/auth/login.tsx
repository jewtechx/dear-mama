import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { RegisterUser, reset } from '../../redux/auth.reducer';
import { toast,ToastContainer } from 'react-toastify';
import {ThunkDispatch} from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';

interface formdata {
    name:String,
    email:String,
    password:String
}


export default function Login() {
    //toast options 
    
    const toastOptions = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      };
      

    const [formData, setFormData] = React.useState<formdata>({
        name: '',
        email: '',
        password: '',
      });

      //input changes
      const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        dispatch(reset())
        setFormData((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };
    
      //submission
      const {error,loading,success} = useSelector((state) => state.auth)
      const {name,email,password} = formData
      const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const onSubmit = async(e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('input');
    
        inputs.forEach((input) => {
          if (input.value === '') {
            input.style.borderColor = 'tomato';
          } else {
            input.style.borderColor = '';
          }
        });

        try{
          dispatch(RegisterUser({ name, email, password }))
        }catch(err){
            console.log(err)
        }
        
        //toast

        if (loading && !error && !success) {
          toast.loading('Please wait...',toastOptions)
        } else {
          if (error) {
            toast.error('Error Creating Account. Check Inputs', toastOptions);
          }
      
          if (success) {
            toast.success('Account Creation Successful', toastOptions);
            window.location.href= '/'
          }
        }
   

      };

    
    


  return (
    <div className='max-w-7xl mx-auto h-screen grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col p-10 md:p-20 justify-center'>
            <h1 className='headline_text mb-10'>Get Better Now</h1>

            <form className='items-left w-full'>
                <div className='flex flex-col mb-4 '>
                    <label htmlFor='name' className='label_text'>Name</label>
                    <input type="text" className='input' placeholder='Enter your name' onChange={handleInputChange}/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label htmlFor='email' className='label_text'>Email Address</label>
                    <input type="email" className='input' placeholder='Enter your email' onChange={handleInputChange}/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label htmlFor='password' className='label_text'>Password</label>
                    <input type="password" className='input' placeholder='password' onChange={handleInputChange}/>
                </div>

                {/* terms and policy */}
                <div className="inline-flex items-center">
                        <label
                            className="relative flex items-center p-3 rounded-full cursor-pointer"
                            htmlFor="login"
                            data-ripple-dark="true"
                        >
                            <input
                            id="login"
                            type="checkbox"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple_shade checked:bg-purple_shade checked:before:bg-purple_shade hover:before:opacity-10"
                            />
                            <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            </div>
                        </label>
                        
                    <p className='body_text'>I agree to the <a href="#">terms & policy</a></p>
                    </div>

                <button className='primary_button w-full' onClick={onSubmit}>Sign Up</button>

                {/* sign up with google/github */}
                <div className='flex flex-col'>
                    <div className='w-full h-[4px] mt-4 flex relative flex-col items-center justify-center'>
                       <p className='body_text p-2 bg-white absolute'>or</p>
                       <div className='w-full h-[0.1px] md:h-[1px] bg-slate-100 asbolute'></div>
                    </div>


                    <div className='flex justify-between mt-6'>
                        <button className='input flex gap-2 items-center justify-center mr-4'>
                            <img src='https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw' className='w-10 h-10 md:w-18 md:h-8'/>
                            Sign in with google
                        </button>
                        <button className='input flex gap-2 px-4 items-center justify-center mr-4'>
                            <img src='https://www.svgrepo.com/show/303110/apple-black-logo.svg' className='w-8 h-8 md:w-18 md:h-8'/>
                            Sign in with apple
                        </button>
                    </div>


                    {/* already have an account */}
                    <div className='flex gap-2 items-center justify-center mt-4'>
                        <p className="body_text">Already have an account ? </p>
                        <Link to={"/signup"} className='body_text text-purple_shade hover:underline underline-purple_shade'>Sign Up</Link>
                    </div>
                </div>
                
            </form>
        </div>
        
        <div className='w-full h-full flex items-center justify-center'>
            <img src="https://i.postimg.cc/CKpzQFLd/Pharmacist-amico.png" className='w-4/4 h-3/4 rounded-tl-xl'/>
        </div>
        <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"/>
    </div>
  )
}
