import React from 'react'
import Image from 'next/image'
import logo1 from "./assets/logo1.jpeg"
import logo2 from "./assets/logo2.jpeg"
import logo3 from "./assets/logo3.jpeg"
import logo4 from "./assets/logo4.jpeg"
import logo6 from "./assets/logo6.jpeg"
import logo7 from "./assets/logo7.jpeg"
import logo5 from "./assets/logo5.jpeg"
import img1 from "./assets//img1.png"
import { Crafty_Girls } from 'next/font/google'
import "./normal.css"
import logo from ".//components/logo.jpeg"
const craftyGirls = Crafty_Girls({
  subsets: ['latin'],
  weight: '400',
})
export default function page() {
  return (
    <main className={craftyGirls.className}>
      <div className='h-100'>
        <div className='items-center justify-center w-170 mx-138 my-48'>

          <h1 className='text-5xl font-bold m-1 '>Hi! deligh</h1>
          <p className='text-2xl font-light text-zinc-400'>I need tech service for my business. Some random freelancer is not able to help me, I need trusted, long-run partners.</p>
          <h2 className='text-5xl font-bold text-blue-600 py-8'>Sure we can help.</h2>

          <div className='text-xl border w-60  h-11'>
            <a className='flex  w-60' href="https://wa.me/917985345578?text=Hey"  >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQev98sSTS7YOMYw9I_IoUa0XlnI3zXnH_JNiXPXmWJfQ&s=10" alt="img" className='h-6 mx-2 my-2' /><span className='mx-1 font-sans my-1 '>Send us a WhatsApp

              </span>
            </a>
          </div> </div>
      </div>
      <div id='logo_wrapper'>
        <div id='moving_logo'>
          <div className='logo_group'>
            <Image src={logo1} alt="Partner logo 1" width={110} />
            <Image src={logo2} alt="Partner logo 2" width={110} />
            <Image src={logo3} alt="Partner logo 2" width={110} />
            <Image src={logo4} alt="Partner logo 3" width={110} />
            <Image src={logo5} alt="Partner logo 4" width={110} />
            <Image src={logo6} alt="Partner logo 4" width={110} />
            <Image src={logo7} alt="Partner logo 5" width={110} />
          </div>
          <div className='logo_group' aria-hidden="true">
            <Image src={logo1} alt="" width={110} />
            <Image src={logo2} alt="" width={110} />
            <Image src={logo3} alt="" width={110} />
            <Image src={logo4} alt="" width={110} />
            <Image src={logo5} alt="" width={110} />
            <Image src={logo6} alt="" width={110} />
            <Image src={logo7} alt="" width={110} />
          </div>
        </div>
      </div>

      {/* second Page */}
      <div className='h-220 py-20'>
        <h1 className='text-center font-sans font-bold text-8xl '>
          WHAT WE DO
        </h1>

        <div className='flex gap-15 mx-100 my-25 w-300'>
          <div className='bg-current rotate-[-5deg] origin-top-left w-80 h-115 transition-transform duration-300 ease-out hover:rotate-0 hover:scale-105 hover:-translate-y-2 hover:z-10 motion-reduce:transition-none' id='card1'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-s5I2VmWdy5zXPFtoHGzFl8rK5V8v-wlMWzZe5xNYg&s" alt="" className='h-85 mx-8 my-8' />
            <h2 className='text-white font-sans font-bold text-3xl mx-15 w-55 h-17'>BGMI IMAGES</h2>
          </div>
          <div id='card2' className='bg-current rotate-[2deg] origin-top-left w-80 h-115 transition-transform duration-300 ease-out hover:rotate-0 hover:scale-105 hover:-translate-y-2 hover:z-10 motion-reduce:transition-none'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISdFkZFBF20wmNGo8iZU5qPzlMyGUawXtFj77yeu52A&s=10" alt="" className='h-80 w-70 mx-5 my-5' />
            <h2 className='text-white font-sans font-bold text-3xl mx-15 w-55 h-12 '> PRODUCTION</h2>
            <p className='font-sans text-amber-50 mx-16 font-light'>Conceptualizing your vision</p>
          </div>
          <div id='card3' className='bg-current rotate-[10deg] origin-top-left w-80 h-115 transition-transform duration-300 ease-out hover:rotate-0 hover:scale-105 hover:-translate-y-2 hover:z-10 motion-reduce:transition-none'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmG2nf8rBhdyTFDEXtOtJ_tw0VbeEZDryyPpa13XGpw&s=10" alt="" className='h-80 w-70 mx-5 m-5' />
            <h2 className='text-white font-sans font-bold text-3xl mx-28 w-55 h-10'>IDEA</h2>
            <p className='font-sans text-amber-50 mx-16 font-light'>Managing and scaling your <span className='mx-6'> projects seamlessly</span></p>


          </div>

        </div>
      </div>
      <div>
<h1 className='text-center font-sans font-bold text-8xl '>
          OUR PROJECTS
        </h1>   
        <div className='h-100 flex gap-5  bg-amber-100 '>
          <div className='h-40 w-60 bg-amber-300 '></div>
          <div className='h-40 w-60 bg-amber-300 '></div>
          <div className='h-40 w-60 bg-amber-300 '></div>
          <div className='h-40 w-60 bg-amber-300 '></div>
         
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
           </div>
    </main>
  )
}
