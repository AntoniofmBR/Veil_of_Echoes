import { motion } from 'framer-motion'

import { FeedbackCard } from '../components/feedbackCard'

import title from '../assets/png/feedbacks_title.png'

import lyraChibi from '../assets/svg/lyra_chibi.svg'
import fayraChibi from '../assets/svg/fayra_chibi.svg'
import kaelChibi from '../assets/svg/kael_chibi.svg'
import masterChibi from '../assets/svg/master_chibi.svg'
import sageChibi from '../assets/svg/sage_chibi.svg'
import thorneChibi from '../assets/svg/thorne_chibi.svg'

const reviews = [
{
    authorName: 'Cristian Anderson',
    role: 'Beta Tester',
    depoiment: '“I loved the dimension-switching mechanic! It kept me constantly on my toes, and the eerie atmosphere of the shadow world is incredibly immersive. I did feel the combat could be a bit smoother, but the storytelling is spot-on and kept me hooked.”',
    urlChibi: lyraChibi,
    color: 'blue',
    rating: 4,
  },

{
    authorName: 'Max Liu',
    role: 'Game Designer',
    depoiment: '"Veil of Echoes feels like a breath of fresh air in the indie scene. The balance between puzzle-solving and exploration is perfect, and Lyra is a compelling character with so much depth. The world-building and art direction are stunning – a must-play for any fan of dark fantasy."',
    urlChibi: kaelChibi,
    color: 'green',
    rating: 5,
  },
{
    authorName: 'Ethan Garcia',
    role: 'Casual Gamer',
    depoiment: '"The art style is fantastic, and I’m intrigued by the story, but I found some puzzles pretty challenging. It’s not too frustrating, but it took me longer than I expected. Overall, I’d definitely recommend it for fans of immersive, story-driven games."',
    urlChibi: masterChibi,
    color: 'red',
    rating: 3,
  },

{
    authorName: 'Jasmine Reed',
    role: 'Professional Beta Tester',
    depoiment: '"The two-world system is brilliant! Each dimension has unique details that make exploring super engaging. The collectibles add a nice touch, and the feeling of being hunted by shadow creatures is chilling. It’s one of the best-designed indie games I’ve tested in years."',
    urlChibi: fayraChibi,
    color: 'purple',
    rating: 5,
  },

{
    authorName: 'Oliver Santos',
    role: 'Indie Game Developer',
    depoiment: '"Veil of Echoes delivers on atmosphere and originality. Lyra’s journey between light and shadow is visually captivating, and the gameplay mechanics are solid. A bit of polish in the controls would make it perfect, but this game is already something special."',
    urlChibi: thorneChibi,
    color: 'gray',
    rating: 4,
  },

{
    authorName: 'Amanda Wells',
    role: 'Fantasy Game Enthisiast',
    depoiment: '"Veil of Echoes is simply captivating. The dual-world mechanic feels fresh, and the storyline pulls you in with its dark, mysterious charm. The puzzles are challenging without being overwhelming, and I found myself genuinely caring about Lyra’s journey. It’s a beautifully crafted experience that I didn’t want to end. Can’t wait for the full release!"',
    urlChibi: sageChibi,
    color: 'white',
    rating: 5,
  },
]

export function Feedbacks () {
  return (
    <nav className='min-h-screen bg-blacks-black_700 flex flex-col items-center justify-between text-whites-white_200 p-7' >
     <div className='flex flex-col' >
      <motion.img
        src={title}
        alt='Feedbacks'
        whileHover={{ scale: 1.1 }}
        className='h-24 self-center mt-12'
      />
      <p className='text-xl text-whites-white_200 font-semibold text-center' >
        Check depoiments of the beta players
      </p>
     </div>

     <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-7 w-full p-7' >
      {reviews.map((review, index) => (
            <FeedbackCard
            key={index}
            authorName={review.authorName}
            role={review.role}
            depoiment={review.depoiment}
            color={review.color}
            urlChibi={ review.urlChibi }
            rating={review.rating}
          />
        ))}
     </div>

     <div/>
    </nav>
  )
}