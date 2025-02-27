import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Suspense } from "react";
import ShapeCanvas from "./canvas/shape";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div className='flex flex-col justify-center items-center mt-5'>
          {/* <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> */}
          {/* <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
        </div>



        <div>
          <h1 className={`${styles.heroHeadText} text-white z-10`}>
            Hi, I'm <span className='text-[#915EFF]'>Neng</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am dumb,  <br className='sm:block hidden' />
            lazy and a bit crazy
          </p>
        </div>
      </div>

      <div className="absolute top-[100px] left-[0px] ">
        <ShapeCanvas />
      </div>


      <ComputersCanvas />

      <div className='absolute xs:bottom-7 bottom-25 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary hover:border-purple-500 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-purple-500 mb-1  hover:bg-purple-500'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;