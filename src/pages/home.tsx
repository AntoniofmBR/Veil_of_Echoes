import { motion } from 'framer-motion';

import { Header } from '../components/header';

import logo from '../assets/png/logo.png'
import lyra from '../assets/png/lyra_banner.png'

export function Home () {
  return (
    <main className='lg:h-screen md:h-screen sm:min-h-screen flex flex-col justify-between bg-blacks-black_700 text-whites-white_200' >
      <Header />

      <div className='bg-[url("/src/assets/png/background_banner.png")] bg-cover bg-no-repeat h-3/4 w-full flex lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-5' >
        <div className='flex flex-col lg:items-start md:items-start sm:items-center justify-center' >
          <motion.img
            src={logo}
            alt='logo'
            whileHover={{ scale: 1.1 }}
            className='lg:h-32 md:h-28 sm:h-28 lg:w-auto md:w-auto sm:w-auto'
          />
          <p className='lg:text-3xl md:text-xl sm:text-2xl lg:w-3/4 md:w-full sm:w-full font-semibold text-whites-white_200 w-3/4' >
            This indie game will give you an out-of-world experience
          </p>
        </div>

        <img
          src={lyra}
          alt="Lyra"
          className='lg:h-full md:h-full sm:h-96 w-auto'
        />
      </div>
    </main>
  )
}