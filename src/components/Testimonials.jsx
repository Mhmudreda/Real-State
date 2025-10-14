import { memo } from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div
    // {--- Animation ---}
     initial={{opacity:0 ,x:100}}
     transition={{duration: 1.5}}
     whileInView={{opacity:1 , x:0}}
     viewport={{once:false}}
    

    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Testmonials'>
           <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonial</span></h1>
           <p  className='text-center text-gray-500 max-w-80 mx-auto'>Real Stories from Those Who Found Home With Us</p>
         
         <div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
           {testimonialsData.map((testimonials , index)=> (
            <div key={index} className='mx-w-[340px]  shadow-lg rounded px-8 py-12 text-center'>
                <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt} />
                <h2 className='text-xl text-gray-700 font-medium'>{testimonials.name}</h2>
                <p className='text-gray-500 mb-4 text-sm'>{testimonials.title}</p>
                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length: testimonials.rating}, (item , index)=>(
                        <img src={assets.star_icon} key={index} alt="" />
                    ))}
                </div>
                <p className='text-gray-600'>{testimonials.text}</p>
            </div>
           ))}
         </div>

    </motion.div>
  );
};

export default memo(Testimonials);