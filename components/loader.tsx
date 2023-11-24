import React from "react"
import { motion } from "framer-motion"
import ZainSciLogo from "./icons/zaisci-logo"

const Loader = ({ setLoading }) => {
	return (
		<motion.div
			className="loader"
			animate={{
				opacity: [0, 0, 1, 1, 1, 0],
				transition: {
					duration: 2,
				},
			}}
			onAnimationComplete={() => setLoading(false)}
		>
			<ZainSciLogo />
		</motion.div>
	)
}

export default Loader
