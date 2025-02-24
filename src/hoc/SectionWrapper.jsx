import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// This HOC wraps a component with a section tag and a span tag with an id
// The StaggerContainer is for the entering of the section
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true ,amount:0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* 添加锚点 */}
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;