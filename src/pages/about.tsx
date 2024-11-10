import { motion } from 'framer-motion';


import title from '../assets/png/about_title.png'
import masterEcho from '../assets/png/master.png'

export function About () {
  return (
    <section className='lg:h-screen md:h-screen sm:min-h-screen flex lg:flex-row md:flex-row sm:flex-col-reverse items-center justify-center bg-blacks-black_700 text-whites-white_200 pl-7 pr-7 gap-12' >
      <img
        src={masterEcho}
        alt="The Master of Echo image"
        className='lg:h-3/4 md:h-3/5'
      />

      <div className='lg:w-1/2 lg:h-3/4 sm:h-auto sm:w-full flex flex-col items-start justify-center gap-5' >
        <motion.img
          src={title}
          alt='about'
          whileHover={{ scale: 1.1 }}
          className='lg:h-20 md:h-20 sm:h-20 self-center lg:mt-0 md:mt-0 sm:mt-7'
        />
        <p className='lg:text-base md:text-xs sm:text-sm font-semibold text-whites-white_200' >
        In the world of Nimris, a dimension on the brink of destruction, there is an ancient legend about a mystical relic called The Veil of Shadows. According to the stories, the Veil has the power to restore balance between the world of the living and the realm of shadows, but it has been lost for millennia.
        </p>
        <p className='lg:text-base md:text-xs sm:text-sm font-semibold text-whites-white_200' >
        You play as Lyra, a young explorer who discovers she has the rare ability to travel between the world of the living and the shadows. Along her journey, she discovers that her missing brother, Kael, has been captured by a dark entity known as The Echo Master. This mysterious being controls the Veil of Shadows and threatens to cast Nimris into eternal night. The only way to save Kael and restore peace is to find the pieces of the Veil and face your own fears. In the world of Nimris, a dimension on the brink of destruction, there is an ancient legend about a mystical relic called The Veil of Shadows. According to the stories, the Veil has the power to restore balance between the world of the living and the realm of shadows, but it has been lost for millennia.
        </p>
      </div>
    </section>
  )
}