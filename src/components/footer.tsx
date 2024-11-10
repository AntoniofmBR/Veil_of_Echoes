import { motion } from 'framer-motion'
import logo from '../assets/png/logo.png'
import { Link } from 'react-scroll'

export function Footer () {
  return (
    <div className='bg-blacks-black_200 text-whites-white_200 font-semibold p-7 flex flex-col items-center justify-between gap-7' >
      <div className='flex lg:flex-row md:flex-row sm:flex-col justify-between items-center w-full' >
        <motion.img
          src={logo}
          alt="logo"
          whileHover={{ scale: 1.1 }}
          className='h-12'
        />

        <section  className='flex items-center justify-center lg:gap-20 md:gap-16 sm:gap-12 lg:mt-0 md:mt-0 sm:mt-2 text-xl' >
          <Link to="homeSection" smooth={true} duration={500}>
            <motion.button whileHover={{ scale: 1.1 }}>
              Home
            </motion.button>
          </Link>

          <Link to="aboutSection" smooth={true} duration={500} >
            <motion.button whileHover={{ scale: 1.1 }}>
              About
            </motion.button>
          </Link>

          <Link to="mechanicsSection" smooth={true} duration={500} >
            <motion.button whileHover={{ scale: 1.1 }}>
              Mechanics
            </motion.button>
          </Link>

          <Link to="feedbacksSection" smooth={true} duration={500}>
            <motion.button whileHover={{ scale: 1.1 }}>
              Feedbacks
            </motion.button>
          </Link>
        </section>
      </div>

      <div className='flex justify-between border-t-2 border-whites-white_200 p-2 w-full' >
          <p className='text-sm' >
             © 2024 All Rights Reserved
          </p>
          <p className='text-sm' >
            Code by Antoniofm
          </p>
      </div>
    </div>
  )
}