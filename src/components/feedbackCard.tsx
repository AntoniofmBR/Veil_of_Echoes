import { Star } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

type CardProps = {
  authorName: string
  role: string
  depoiment: string
  urlChibi: string
  color: string
  rating: number
}

export function FeedbackCard({ authorName, role, depoiment, urlChibi, color, rating }: CardProps) {
  const colorClasses = {
    blue: "to-blues-blue_100",
    green: "to-greens-green_300",
    red: "to-reds-red_500",
    purple: "to-purples-purple_300",
    gray: "to-grays-gray_400",
    white: "to-whites-white_300",
  };

  return (
    <motion.div
      className={`bg-gradient-to-b from-blacks-black_200 ${colorClasses[color as keyof typeof colorClasses]} text-white p-6 pb-0 rounded-lg shadow-lg lg:w-3/4 md:w-3/4 sm:w-full flex flex-col justify-between items-center`}
      whileHover={{ scale: 1.07 }}
    >
      <div className='flex flex-col w-full justify-center items-center' >
        <h2 className="text-xl font-bold text-whites-white_200">
          {authorName}
        </h2>

        <p className="text-sm italic text-grays-gray_100">
          {role}
        </p>
      </div>

      <p className="text-whites-white_200 font-semibold mt-4 lg:text-xl md:text-sm sm:text-xl">
        {depoiment}
      </p>

      <div className='flex lg:flex-row md:flex-col sm:flex-row items-center w-full justify-between' >
        <div className='w-28' />

        <div className="flex justify-center p-6">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={32}
              weight={index < rating ? "fill" : "bold"}
              className={index < rating ? "text-whites-white_200" : "text-whites-white_200"}
            />
          ))}
        </div>
        
        <img
          src={urlChibi} 
          alt={`${authorName} chibi`}
          className="h-32"
        />
      </div>
    </motion.div>
  );
}
