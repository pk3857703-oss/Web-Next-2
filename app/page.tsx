import React from 'react'
import Image from 'next/image'
import ss1 from "./assets/Gemini_Generated_Image_8se23z8se23z8se2.png"
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
  return (<div>
    <main className={craftyGirls.className}>


      <div className="flex min-h-[80vh] w-full items-center justify-center px-5 sm:px-8">
        <div className="mx-auto w-full max-w-xl py-16 text-center">

          <h1 className=" mb-3 text-3xl font-bold sm:text-6xl lg:text-5xl  w-[50%]">
            Hi! deligh
          </h1>

          <p className="mx-auto w-full max-w-xl text-lg font-light leading-relaxed text-zinc-400 sm:text-3xl lg:text-2xl ">
            I need tech service for my business. Some random freelancer is not able
            to help me, I need trusted, long-run partners.
          </p>

          <h2 className="py-5 text-3xl  font-bold text-blue-600 sm:text-4xl lg:text-4xl ">
            Sure we can help.
          </h2>

          <a
            href="https://wa.me/917985345578?text=Hey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-zinc-300 px-5 py-3 text-sm sm:text-base transition hover:bg-green-500"
          >
            <span className='font-sans'>Send us a WhatsApp</span>
          </a>

        </div>
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

      <section className="w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

        <h1 className="mb-12 text-center font-sans text-4xl font-bold sm:mb-16 sm:text-6xl lg:text-8xl">
          WHAT WE DO
        </h1>

        <div className="my-25 mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {/* Card 1 */}
          <div
            id="card1"
            className="w-full max-w-80 rotate-[-5deg] overflow-hidden bg-neutral-800 p-4 transition-transform duration-300 ease-out hover:z-10 hover:rotate-0 hover:scale-105 hover:-translate-y-2 motion-reduce:transition-none"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-s5I2VmWdy5zXPFtoHGzFl8rK5V8v-wlMWzZe5xNYg&s"
              alt="BGMI images"
              className="aspect-square w-full rounded object-cover"
            />
            <h2 className="mt-5 text-center font-sans text-2xl font-bold text-white sm:text-3xl">
              BGMI IMAGES
            </h2>
          </div>

          {/* Card 2 */}
          <div
            id="card2"
            className="w-full max-w-80 rotate-[2deg] overflow-hidden bg-neutral-800 p-4 transition-transform duration-300 ease-out hover:z-10 hover:rotate-0 hover:scale-105 hover:-translate-y-2 motion-reduce:transition-none"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISdFkZFBF20wmNGo8iZU5qPzlMyGUawXtFj77yeu52A&s=10"
              alt="Production services"
              className="aspect-square w-full rounded object-cover"
            />
            <h2 className="mt-5 text-center font-sans text-2xl font-bold text-white sm:text-3xl">
              PRODUCTION
            </h2>
            <p className="mt-2 text-center font-sans text-sm font-light text-amber-50 sm:text-base">
              Conceptualizing your vision
            </p>
          </div>

          {/* Card 3 */}
          <div
            id="card3"
            className="w-full max-w-80 rotate-[10deg] overflow-hidden bg-neutral-800 p-4 transition-transform duration-300 ease-out hover:z-10 hover:rotate-0 hover:scale-105 hover:-translate-y-2 motion-reduce:transition-none"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmG2nf8rBhdyTFDEXtOtJ_tw0VbeEZDryyPpa13XGpw&s=10"
              alt="Creative ideas"
              className="aspect-square w-full rounded object-cover"
            />
            <h2 className="mt-5 text-center font-sans text-2xl font-bold text-white sm:text-3xl">
              IDEA
            </h2>
            <p className="mt-2 text-center font-sans text-sm font-light text-amber-50 sm:text-base">
              Managing and scaling your projects seamlessly
            </p>
          </div>

        </div>
      </section>
      {/* our projects */}
      <div>

        <h1 className="my-30 mb-12 text-center font-sans text-4xl font-bold sm:mb-16 sm:text-6xl lg:text-8xl">
          OUR PROJECTS
        </h1>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <div className="w-[48%] md:w-60  h-35 hover:bg-blue-500  border transition-all ease-in ">    <img className='' src="https://itsdeligh.com/assets/mylib.webp" alt="" />
          </div>
          <div className="w-[48%] md:w-60  h-35 hover:bg-blue-500  border  transition-all ease-in "><img src="https://itsdeligh.com/assets/reloco.webp" alt="" /></div>
          <div className="w-[48%] md:w-60  h-35 hover:bg-blue-500  border transition-all ease-in "><img src="https://itsdeligh.com/assets/oik.webp" alt="" /></div>
          <div className="w-[48%] md:w-60  h-35 hover:bg-blue-500  border transition-all ease-in "><img src="https://itsdeligh.com/assets/spns.webp" alt="" /></div>
        </div>
        <div className="my-4 flex flex-wrap justify-center gap-4 w-full ">
          <div className="w-[48%] md:w-60  border h-35 hover:bg-blue-500  transition-all ease-in "><img src="https://itsdeligh.com/assets/leadnow.png" alt="" /></div>
          <div className="w-[48%] md:w-60  border h-35 hover:bg-blue-500  transition-all ease-in "><img src="https://itsdeligh.com/assets/jwell.webp" alt="" /></div>
          <div className="w-[48%] md:w-60  border h-35 hover:bg-blue-500  transition-all ease-in "><img src="https://itsdeligh.com/assets/toy.webp" alt="" /></div>
          <div className="w-[48%] md:w-60  border h-35 hover:bg-blue-500  transition-all ease-in "><img src="https://itsdeligh.com/assets/schoolbus.webp" alt="" /></div>
        </div>
      </div>
      {/* Our service & Business */}
      <div className='bg-lime-400  '>
        <h1 className=" my-30 mb-12 text-center font-sans text-4xl font-bold sm:mb-16 sm:text-5xl md:text-5xl  lg:text-7xl transition ">
          Our service &  <br />Business
        </h1>
        <div className="flex flex-wrap justify-center gap-8 w-full ">
          <div className='rounded-4xl h-60 bg-amber-50 w-80  transition-transform duration-300 ease-out  hover:scale-105 hover:-translate-y-2'>
            <div className='my-15'>
              <h3 className='flex justify-center my-2 text-xl font-extrabold font-sans w-[70%]'>Ecommerce</h3>
              <p className='mx-13 w-60 font-sans font-light'>
                Scalable online stores with payments, inventory, and seamless checkout. Powered by shopify, woo-commerce or custom.
              </p></div>
          </div>
          <div className=' transition-transform duration-300 ease-out  hover:scale-105 hover:-translate-y-2 rounded-4xl h-60 bg-amber-50 w-80'>
            <div className='my-15'>
              <h3 className=' flex justify-center w-full my-2 text-xl font-extrabold font-sans'>Educational App</h3>
              <p className='mx-17 w-60 font-sans  font-light'>
app for schools and choching institutes. Upload lectures and notes effeciently .              </p></div>
          </div>
          <div className=' transition-transform duration-300 ease-out  hover:scale-105 hover:-translate-y-2 rounded-4xl h-60 bg-amber-50 w-80'>
            <div className='my-20'>
              <h3 className='flex justify-center w-full my-2 text-xl font-extrabold font-sans'>Cafe and Restraunts</h3>
              <p className='my-3 mx-14 w-60 font-sans  font-light'>
Handle booking and staff, custom solution for cafes and food stalls.              </p></div>
          </div>
          <div className=' transition-transform duration-300 ease-out  hover:scale-105 hover:-translate-y-2 rounded-4xl h-60 bg-amber-50 w-80'>
            <div className='my-15'>
              <h3 className='flex justify-center w-full my-2 text-xl font-extrabold font-sans'>Travel and Tourism</h3>
              <p className='w-[80%] mx-12 font-sans  font-light'>
Tracking and management tools for agencies. Bus tracking, petrol and expence managment and more.              </p></div>
          </div>

        </div>
        <div className="my-4  flex flex-wrap justify-center gap-8 w-full ">
          <div className=' transition-transform duration-300 ease-out  hover:scale-105 hover:-translate-y-2 rounded-4xl h-60 bg-amber-50 w-70'>
            <div className='my-15'>
              <h3 className='mx-15 my-2 text-xl font-extrabold font-sans'>HRMS and ERP Software</h3>
              <p className='mx-8 w-60 font-sans  font-light'>
Custom solutions for human resources and enterprise resource planning.              </p></div>
          </div>
          <div className=' transition-transform duration-300 ease-out  hover:scale-105 hover:-translate-y-2 rounded-4xl h-60 bg-amber-50 w-70'>
            <div className='my-15'>
              <h3 className='flex justify-center w-full my-2 text-xl font-extrabold font-sans'>Urban Services</h3>
              <p className='mx-8 w-60 font-sans  font-light'>
app that can manage you daily booking likes, electrician, packers and movers, cleaning, laudery etc.              </p></div>
          </div>
          <div className=' transition-transform duration-300 ease-out  hover:scale-105 hover:-translate-y-2 rounded-4xl h-60 bg-amber-50 w-70'>
            <div className='my-15'>
              <h3 className='flex justify-center w-full my-2 text-xl font-extrabold font-sans'>Business Websites</h3>
              <p className='mx-8 w-60 font-sans  font-light'>
unique landing pages that match with your brand identity and delivery clear messages.              </p></div>
          </div>
          <div className=' transition-transform duration-300 ease-out  hover:scale-105 hover:-translate-y-2 rounded-4xl h-60 bg-amber-50 w-70'>
            <div className='my-15'>
              <h3 className='flex justify-center w-full my-2 text-xl font-extrabold font-sans'>Others</h3>
              <p className='flex justify-center mx-13 w-60 font-sans  font-light'>
Lets us know what your requirements are we are the builders. Nothing stop us.      </p></div>
          </div></div>
        <div>
          <div className='bg-lime-400 h-20'></div>
          
        </div>
        
      </div>
      <div className=''>
        <div className='flex gap-10 justify-center my-20 sm:text-4xl'>
      <img className='transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3  border rounded-2xl' src="https://itsdeligh.com/assets/insta.webp" alt="" width={280} />
      <img className='transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3  border rounded-2xl ' src="https://itsdeligh.com/assets/twitter.jpeg" alt=""  width={280}/>
      <img className='transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 border rounded-2xl ' src="https://itsdeligh.com/assets/linked.webp" alt="" width={280} />
       </div>
       <div className='flex justify-center space-x-10'>
         <img src="https://itsdeligh.com/assets/meta.png" alt="" className='w-25 h-10 transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 rounded-4xl' />
      <img src="https://itsdeligh.com/assets/shopu.jpg" alt=""className='w-45 h-10 my-13 mx-2 transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3  rounded-4xl '/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4-H9Wch5qUuMd1oadnVga4BuOvkQtEfoV3JOH3cLQQ&s=10" alt="" className='w-50 h-60 transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3' />
    
       </div>
      
      </div>
      {/* contact me */}
      <div className='bg-amber-500 font-sans'>
        <h1 className=" bg-amber-200 w-[55%] my-30 mb-12 text-center font-sans text-4xl font-bold sm:mb-16 sm:text-6xl lg:text-8xl">
          Contact me

        </h1>
        <div className='flex'>
          <span className='bg-amber-550'>
            Safdurjung, New Delhi <br /> 2026
            <br />
            <br />
            <br />
            <span className='bg-amber-900 mx-'>
              Office hours  <br />
              Monday - Friday <br />
              11 AM - 2 PM</span>
          </span>
          <div className='mx-100 w-[55%] '>
            <div>

            </div>
            <span className='bg-amber-900'>Name (required)
            </span> <br />
            <input style={{ borderBottom: '2px solid black', width: '500px' }} type="text" name="" id="" /> <br />

            <span>Phone Number (required)
            </span> <br />
            <input style={{ borderBottom: '2px solid black', width: '500px' }} type="text" name="" id="" /> <br />

            <span>Project description (required)</span> <br />
            <input style={{ borderBottom: '2px solid black', width: '500px' }} type="text" name="" id="" /> <br />
          </div>
        </div>
      </div>
      
     
     
      
    </main>
  </div>
  )
}