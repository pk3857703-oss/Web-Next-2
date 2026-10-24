import Link from 'next/link'
import Image from 'next/image'
import logo from './logo.jpeg'
const Nav = () => {
    return (
        <div>

            <div className="flex justify-between items-center p-4 text-black ">
                <div>
                    <Image src={logo} alt="Its Deligh" width={100} className='mx-3' />
                </div>
                <div className="flex space-x-10">
                    <Link href="/about" className="font-medium">About</Link>
                    <Link href="/work" className=" font-medium">Work</Link>
                    <Link href="/=services" className=" font-medium">Services</Link>
                </div>
                <div>
                    <Link href="/login" className=" font-bold bg-amber-300  px-7 py-3 mx-5 border">Book a Call</Link>
                </div>

            </div>
        </div>
    )
}

export default Nav