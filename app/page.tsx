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
     

<div className="flex min-h-[80vh] w-full items-center justify-center px-5 sm:px-8">
  <div className="mx-auto w-full max-w-xl py-16 text-center">

    <h1 className=" mb-3 text-3xl font-bold sm:text-6xl lg:text-5xl ">
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

  <div className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

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

    </main>
  )
}
