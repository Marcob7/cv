import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
//import Logo from "../Assets/logo.png"
import {Link} from 'react-scroll'


const Navbar = () => {
const[nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)


  return (
    <div className="fixed w-full h-[40px] flex justify-between items-center navbar px-4 bg-[#252525] text-gray-300">
        <div className='project-heading'>
        <h2>Marco Buitenhuis Portfolio</h2>
        </div>

        {/* Menu */}
        
        <ul className='hidden hd:flex'>
            <li className="">
            Home
           </li>
            <li className="">
            About
          </li>
            <li className="">
            Ervaring
           </li>
            <li className="">
            Work
            </li>
            <li className="">
            Contact
           </li>
           <li className="">
            <a href="/Projecten">Projecten</a>
           </li>
        </ul>
     
    

         {/* Hamburger */}
         <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
         </div>

         {/* Mobile menu */}
         <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500} >
            Home
            </Link></li>
            <li className="py-6 text-4xl"> <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500} >
            About
            </Link></li>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500} >
            Skills
            </Link></li>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500} >
            Work
            </Link></li>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500} >
            Contact
            </Link></li>
        </ul>

          {/* Social icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                  Linkedin <FaLinkedin size={30} />
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                  GitHub <FaGithub size={30} />
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2d0]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                  Email <HiOutlineMail size={30} />
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                  Resume <BsFillPersonLinesFill size={30} />
                </a>
              </li>
            </ul> 
          </div>
    </div>
  )
} 

export default Navbar