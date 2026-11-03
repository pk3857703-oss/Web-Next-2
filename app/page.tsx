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
import { after } from 'next/dist/server/web/exports'
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
      <div className='mx-5'>

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
        <div className='overflow-x-auto scrollbar-hide'>
        <div className='flex gap-10 justify-center my-20 sm:text-4xl'>
      <img className='transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3  border rounded-2xl' src="https://itsdeligh.com/assets/insta.webp" alt="" width={280} />
      <img className='transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3  border rounded-2xl ' src="https://itsdeligh.com/assets/twitter.jpeg" alt=""  width={280}/>
      <img className='transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 border rounded-2xl ' src="https://itsdeligh.com/assets/linked.webp" alt="" width={280} />
       </div> </div>
      <div className="my-5 flex flex-wrap justify-center gap-6 mx-5 items-center">
  
  <div className="flex flex-col items-center">
    <img
      src="https://itsdeligh.com/assets/meta.png"
      alt="Meta"
      className="w-20 h-7 transition-transform duration-200 hover:scale-105 hover:-translate-y-3 rounded-4xl hover:shadow-lg hover:border"
    />
  </div>

  <div className="flex flex-col items-center">
    <img
      src="https://itsdeligh.com/assets/shopu.jpg"
      alt="Shopify"
      className="w-34 h-8 transition-transform duration-200 hover:scale-105 hover:-translate-y-3 rounded-4xl hover:shadow-lg hover:border"
    />
  </div>

  <div className="flex px-2 transition-transform duration-200 hover:scale-105 hover:-translate-y-3 rounded-4xl hover:border items-center">
    <img
      src="https://itsdeligh.com/assets/cloud.png"
      alt="Google Cloud"
      className="w-15 h-10 "
    />
    <span className="font-sans text-sm mt-1">Google Cloud</span>
  </div>

</div>
      
      </div>
      

      {/* contact me */}
  <h1 className='my-30 md:text-8xl font-thinbold font-sans mx-5 w-[65%] justify-center lg:text-8xl flex sm:text-7xl '>Contact Me</h1>      
<form className="max-w-sm mx-auto space-y-4 font-sans">

    <div>
        <label  className="block mb-2.5 text-sm font-medium text-heading">Name (required)
</label>
        <input type="text" id="visitors" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label  className="block mb-2.5 text-sm font-medium text-heading">Phone Number (required)
</label>
        <input type="text" id="visitors" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label className="block mb-2.5 text-sm font-medium text-heading">Project description (required)
</label>
        <input type="text" id="visitors" className="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-3.5 py-3 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
   <button className='text-white bg-black  text-heading font-thinbold py-2 px-4 rounded-3xl hover:bg-gray-500' type="submit">
      Submit
    </button>
</form>
<div className="h-16"></div>

<footer className='bg-olive-900  bg-neutral-tertiary-medium text-heading py-6 px-4 text-stone-200 font-sans'>
  <div className='  justify-evenly font-bold  h-65 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 max-w-7xl mx-auto my-10 '>
    <div className=''>SERVICES
      <div className='flex flex-col gap-3 font-light my-5 opacity-70 '>
    <a href="" className=''>Web Development</a>
    <a href="">Mobile App Development</a>
    <a href="">UI/UX Design</a>
    <a href="">Cloud Hosting</a>
    <a href="">SEO Optimization</a>
    <a href="">Maintenance</a>
     </div>
    </div>
    <div>SOLUTIONS
      <div className='flex flex-col gap-3 font-light my-5 opacity-70'>
    <a href="" className=''>E-commerce Stores</a>
    <a href="">Educational Apps</a>
    <a href="">Restaurant Systems</a>
    <a href="">Real Estate Portals</a>
    <a href="">Booking Systems</a>
    <a href="">SaaS Platforms</a>
     </div>
    </div>
    <div>COMPANY

    <div className='flex flex-col gap-3 font-light my-5 opacity-70'>
    <a href="" className=''>Our Team</a>
    <a href="">Mobile App Development</a>
    <a href="">Careers</a>
    <a href="">Contact Us</a>
    <a href="">Site Map</a>
    <a href="">MCA Registration</a>
     </div>
    </div>
    <div>JOIN OUR NEWSLETTER
      <p className='font-extralight opacity-70'>
        Receive exclusive tips and tech insights directly to your inbox. <br />It's free!</p>
    
<form>
    <div className="grid gap-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols">
            <input  type="email" id="email" className="rounded-3xl my-5 bg-neutral-secondary-medium  text-heading text-sm bg-gray-700   block px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Email address" required  />
                <button type="submit" className="mx-1 my-5 text-white bg-blue-400 rounded-3xl bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 h-11 focus:outline-none">Submit</button>

        </div>
       </div>
    
</form>
 <div className='flex gap-3 my-5 '>
  <a href="javascript:;"
className="p-2 w-12 rounded-lg flex items-center border border-gray-300 justify-center bg-gray-100">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
fill="none">
<path
  d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
  fill="#111827" />
</svg></a>
<a href="javascript:;"
className="p-2 w-12 rounded-lg flex items-center border border-gray-300 justify-center bg-gray-100">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
fill="none">
<path
  d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
  fill="#111827" />
</svg></a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full transition-all duration-300 hover:bg-sky-500/10 hover:scale-110 group">
  
  <svg className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-colors duration-300 group-hover:text-sky-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
</a>
</div>
    </div>
    
  </div>
  <div className='text-center'>
  <h2 className="font-bold text-[clamp(2rem,12vw,13rem)] opacity-5">
    Software
  </h2>

  <h2 className="opacity-5 text-[clamp(2rem,12vw,13rem)] font-bold text-gray-800 dark:text-white">
    Engineer
  </h2>
</div>
  </footer>      
     
    
 

    
    </main>
  </div>
  )
}