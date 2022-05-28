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
				<p>Navbar Brand</p>
			</div>
			<div className="button">
				<button>Menu</button>
			</div>
		</motion.div>
	);
}

export default Navbar;
