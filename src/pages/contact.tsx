import { motion } from 'framer-motion'
import { FacebookLogo, InstagramLogo, XLogo, YoutubeLogo } from '@phosphor-icons/react'
import { useRef } from 'react';

import titlePng from '../assets/png/contact_title.png'
import lyra from '../assets/png/lyra_contact.png'

export function Contact () {
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (emailRef.current) {
      if (emailRef.current.value == '') {
        return alert('Por favor digite o seu e-mail')
      }

      alert(`E-mail enviado para ${emailRef.current.value}`)
      emailRef.current.value = ''
    }
  };

  return (
    <nav className='min-h-screen bg-blacks-black_700 flex flex-col items-center justify-between text-whites-white_200 p-7' >
      <motion.img
        src={titlePng}
        alt="title" 
        whileHover={{ scale: 1.1 }}
        className='h-32 w-auto'
      />

      <section className='w-full text-xl font-bold flex lg:flex-row md:flex-row sm:flex-col justify-center items-center p-12 mb-7 gap-28' >
        <div className='flex flex-col gap-7' >
            <div className='flex gap-4' >
              <motion.div 
                className='h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-yellows-yellow_100 via-pinks-pink_100 to-purples-purple_200'
                whileHover={{ scale: 1.07 }}
              >
                <InstagramLogo weight='bold' size={32} />
             </motion.div>

             <motion.div
              className='h-12 w-12 flex items-center justify-center rounded-full bg-reds-red_100'
              whileHover={{ scale: 1.07 }}
              >
                <YoutubeLogo weight='bold' size={32} />
             </motion.div>

             <motion.div 
              className='h-12 w-12 flex items-center justify-center rounded-full bg-grays-gray_500'
              whileHover={{ scale: 1.07 }}
              >
              <XLogo weight='bold' size={32} />
             </motion.div>

             <motion.div
              className='h-12 w-12 flex items-center justify-center rounded-full bg-blues-blue_300'
              whileHover={{ scale: 1.07 }}
              >
              <FacebookLogo weight='bold' size={32} />
             </motion.div>
            </div>

            <p className='lg:text-2xl md:text-xl sm:text-2xl text-whites-white_200 font-medium' >
              Be sure to join Lyra on this exciting journey, enter you e-mail to receive the latest news
            </p>

            <form className="relative lg:w-3/4 md:w-full sm:w-full flex items-center justify-end" onSubmit={handleSubmit}>
            <input
              type="email"
              ref={emailRef}
              className="w-full p-3 pr-28 rounded-xl text-blacks-black_500"
              placeholder="yourname@email.com"
            />
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#FC2F00' }}
              type="submit"
              className="absolute bg-oranges-orange_500 p-2 px-4 rounded-xl text-white font-bold lg:text-sm md:text-xs sm:text-sm mr-3"
            >
              Receive news
            </motion.button>
          </form>
        </div>

        <motion.img
          src={lyra}
          alt='Lyra image'
          className='lg:h-2/5 md:h-2/5 sm:h-auto lg:w-2/5 md:w-2/5 sm:w-auto'
          whileHover={{ scale: 1.1 }}
        />
      </section>
    </nav>
  )
}