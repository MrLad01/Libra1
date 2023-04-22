import { motion } from "framer-motion"
import { zoomIn } from "../utils/motion"

export default function Help() {
  return (
    <div className="help">
      <motion.p
        variants={zoomIn(1, 2)}
        initial="hidden"
        animate="show"
      >To send a review on what you've seen so far, drop a message to ladayodeji@gmail.com, Thanks</motion.p>
    </div>
  )
}
