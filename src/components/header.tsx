import { motion } from 'framer-motion';
import { Link } from 'react-scroll'

import logo from '../assets/png/logo.png';

export function Header () {
  return (
    <div className='text-white font-semibold bg-transparent p-7 flex md:flex-row sm:flex-col items-center justify-between'>
      <motion.img
        src={logo}
        alt="logo"
        whileHover={{ scale: 1.1 }}
        className='lg:h-12 md:h-7 sm:h-0'
      />

      <section className='flex items-center justify-center gap-12 lg:text-xl md:text-base sm:text-sm'>
        <Link to="homeSection" smooth={true} duration={500} >
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

      <Link to="contactSection" smooth={true} duration={500} >
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#FC2F00' }}
          className='bg-oranges-orange_500 flex items-center justify-center p-3 rounded-xl font-bold h-8 lg:w-44 md:w-40 sm:w-36 lg:mt-0 md:mt-0 sm:mt-5 lg:text-xl md:text-base sm:text-base'
        >
          Pre order now
        </motion.button>
      </Link>
    </div>
  );
}
