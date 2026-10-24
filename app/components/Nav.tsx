
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './logo.jpeg'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    return (
        <nav className="relative w-full bg-white text-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4">

                {/* Logo */}
                <Link href="/" onClick={closeMenu} className="shrink-0">
                    <Image
                        src={logo}
                        alt="Its Deligh"
                        width={100}
                        priority
                        className="h-auto w-[85px] sm:w-[100px]"
                    />
                </Link>

                {/* Desktop Navigation: Laptop and larger */}
                <div className="hidden items-center gap-8 lg:flex">
                    <Link href="/about" className="font-medium transition hover:text-amber-600">
                        About
                    </Link>

                    <Link href="/work" className="font-medium transition hover:text-amber-600">
                        Work
                    </Link>

                    <Link href="/services" className="font-medium transition hover:text-amber-600">
                        Services
                    </Link>

                    <Link
                        href="/login"
                        className="border bg-amber-300 px-6 py-3 font-bold transition hover:bg-amber-400"
                    >
                        Book a Call
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-gray-300 lg:hidden"
                >
                    <span
                        className={`h-0.5 w-6 bg-black transition-all duration-300 ${
                            isOpen ? 'translate-y-2 rotate-45' : ''
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-black transition-all duration-300 ${
                            isOpen ? 'opacity-0' : ''
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-black transition-all duration-300 ${
                            isOpen ? '-translate-y-2 -rotate-45' : ''
                        }`}
                    />
                </button>
            </div>

            {/* Mobile and Tablet Dropdown */}
            <div
                id="mobile-navigation"
                className={`absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-lg transition-all duration-300 lg:hidden ${
                    isOpen
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-2 opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex flex-col gap-1 px-5 py-4">
                    <Link
                        href="/about"
                        onClick={closeMenu}
                        className="rounded-md px-4 py-3 font-medium hover:bg-amber-50"
                    >
                        About
                    </Link>

                    <Link
                        href="/work"
                        onClick={closeMenu}
                        className="rounded-md px-4 py-3 font-medium hover:bg-amber-50"
                    >
                        Work
                    </Link>

                    <Link
                        href="/services"
                        onClick={closeMenu}
                        className="rounded-md px-4 py-3 font-medium hover:bg-amber-50"
                    >
                        Services
                    </Link>

                    <Link
                        href="/login"
                        onClick={closeMenu}
                        className="mt-2 border bg-amber-300 px-4 py-3 text-center font-bold hover:bg-amber-400"
                    >
                        Book a Call
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
