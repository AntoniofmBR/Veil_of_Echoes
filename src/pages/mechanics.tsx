import { motion } from 'framer-motion'

import titlePng from '../assets/png/mechanics_title.png'

export function Mechanics () {
  return (
    <nav className='min-h-screen bg-mechanics bg-cover bg-no-repeat flex flex-col items-center justify-between text-whites-white_200 p-7' >
      <motion.img
        src={titlePng}
        alt="title" 
        whileHover={{ scale: 1.1 }}
        className='lg:h-32 md:h-28 sm:h-24 w-auto'
      />

      <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full lg:text-xl md:text-xl sm:text-base font-bold p-12 mb-7 gap-28' >
        {/* <div className='w-1/2 flex flex-col gap-10' > */}
          <p>
            Lyra can switch between the world of the living and the shadows. Each world has its own structures, enemies and puzzles, forcing the player to creatively navigate between dimensions to progress.
          </p>

          <p>
            The player will have to use specific objects in each dimension to unlock paths. For example, a destroyed bridge in the real world may be intact in the shadow world.
          </p>

          <p>
            Along the journey, Lyra collects fragments of the Veil, which also unlock new abilities, such as running faster, resisting hostile environments, or manipulating gravity.
          </p>
        {/* </div> */}

        {/* <div className='w-1/2 flex flex-col gap-10' > */}
          <p>
            Lyra can switch between the world of the living and the shadows. Each world has its own structures, enemies and puzzles, forcing the player to creatively navigate between dimensions to progress.
          </p>

          <p>
            The player will have to use specific objects in each dimension to unlock paths. For example, a destroyed bridge in the real world may be intact in the shadow world.
          </p>

          <p>
            Along the journey, Lyra collects fragments of the Veil, which also unlock new abilities, such as running faster, resisting hostile environments, or manipulating gravity.
          </p>
        {/* </div> */}
      </section>

      <div />
    </nav>
  )
}