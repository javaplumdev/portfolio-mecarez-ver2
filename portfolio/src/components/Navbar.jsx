// React
import React, { useContext } from 'react';
// Motion
import { motion } from 'framer-motion';
// Context
import { ContextVar } from '../context/ContextFile';

function Navbar() {
	const { animateNavbar } = useContext(ContextVar);

	return (
		<motion.div
			variants={animateNavbar}
			initial="initial"
			animate="animate"
			className="d-flex justify-content-between container py-3"
		>
			<div className="navbar">
				<p className="lead">Navbar Brand</p>
			</div>
			<motion.div
				className="navbar-button"
				whileHover={{
					rotate: 180,
					cursor: 'pointer',
					transition: { ease: [0.6, 0.01, -0.05, 0.95] },
				}}
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line
						x1="3"
						y1="3"
						x2="20.9994"
						y2="3"
						stroke="black"
						strokeWidth="6"
						strokeLinecap="round"
					/>
					<line
						x1="8.97255"
						y1="15"
						x2="21"
						y2="15"
						stroke="black"
						strokeWidth="6"
						strokeLinecap="round"
					/>
				</svg>
			</motion.div>
		</motion.div>
	);
}

export default Navbar;
