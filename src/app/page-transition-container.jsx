import { motion } from "framer-motion"

export default function PageTransitionContainer({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
                ease: "easeIn",
                duration: 0.4,
                delay: 0.1
            }}
        >
            {children}
        </motion.div>
    )
}