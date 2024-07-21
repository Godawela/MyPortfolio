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
            className="my-4"><a href="www.linkedin.com/in/umesha-godawela22" className="my-4 border-b ">LinkedIn Profile</a></motion.p>

            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:1,x:100}}
            transition={{duration:1}}
            className="my-4">+94 707445923

            </motion.p>
            
            <a href="umeshagodawela@gmail.com" className="my-4 border-b ">Mail To Me</a>
  
        </div>
    </div>
  )
}

export default Contact