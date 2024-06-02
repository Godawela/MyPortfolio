import { motion } from "framer-motion";

const Contact=()=> {
  return (
    <div className="border-b border-neutral-800 pb-20">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:1,y:-100}}
        transition={{duration:0.5}} 
        className="my-10 text-4xl text-center">
          Get in Touch
        </motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:1,x:-100}}
            transition={{duration:1}}
            className="my-4">767 Fifth Avenue, New York, NY 10153</motion.p>

            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:1,x:100}}
            transition={{duration:1}}
            className="my-4">+12 4555 666 00</motion.p>
            
            <a href="#" className="my-4 border-b ">me@example.com</a>
  
        </div>
    </div>
  )
}

export default Contact