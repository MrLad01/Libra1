import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"

export default function Help() {
  return (
    <div>
      <motion.p
        variants={slideIn("up", "animate", 4, 2)}
        initial="hidden"
        whileInView="show"
      >To send a review on what you've seen so far, drop a message to ladayodeji@gmail.com, Thanks</motion.p>
    </div>
  )
}
