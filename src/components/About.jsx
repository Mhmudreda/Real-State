import { memo } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div
     // {--- Animation ---}
     initial={{opacity:0 ,x:-200}}
     transition={{duration: 1.5}}
     whileInView={{opacity:1 , x:0}}
     viewport={{once:false}}
    
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg-px-32 w-full overflow-hidden ' id='About'>

        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-center text-gray-500 max-w-80 mb-8'>Passionate About Properties, Dedicated to your Vision</p>
        <div className="flex flex-col  md:flex-row  md:items-start gap-20">
            <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' alt="" />
            <motion.div
              // {--- Animation ---}
               initial={{opacity:0 ,x:200}}
               transition={{duration: 1.5}}
               whileInView={{opacity:1 , x:0}}
               viewport={{once:false}}
            
            
            className='flex flex-col items-center md:items-start  mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Deliverd</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>We believe real estate is more than just property — it’s about building a future.
                                               We provide complete real estate solutions, including buying, selling, and renting, with a strong focus on quality, transparency, and client satisfaction.
                                               Our mission is to help you find your perfect home or investment opportunity with ease and confidence.</p>
                <button className=' bg-blue-600 text-white px-8 py-2 rounded-xl  hover:bg-blue-400 hover:text-black transition duration-400 ease-in-out '>Learn More</button>
            </motion.div>
        </div>
    </motion.div>
  );
};

export default memo(About);