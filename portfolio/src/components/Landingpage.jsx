// React
import React, { useContext } from 'react';
// Components
import Navbar from './Navbar';
// Marquee
import Marquee from 'react-fast-marquee';
// Context
import { ContextVar } from '../context/ContextFile';
// Motion
import { motion } from 'framer-motion';

function LandingPage() {
	const { animateBannerBlock, animateText } = useContext(ContextVar);

	return (
		<>
			<Navbar />
			{/* banner */}
			<div className="banner container">
				<motion.h1
					variants={animateText}
					initial="initial"
					animate="animate"
					className="fw-bold display-1"
				>
					Charlito Mecarez Jr.
				</motion.h1>
				<motion.div
					variants={animateBannerBlock}
					initial="initial"
					animate="animate"
					className="banner-block"
				>
					<Marquee gradient={false} speed={50}>
						<h1 className="banner-marquee fw-bold">
							CREATIVE FRONTEND DEVELOPER / UI DESIGNER
						</h1>
					</Marquee>
					<Marquee gradient={false} speed={100} direction="right">
						<h1 className="banner-marquee fw-bold">
							CREATIVE FRONTEND DEVELOPER / UI DESIGNER
						</h1>
					</Marquee>

					<Marquee gradient={false} speed={50}>
						<h1 className="banner-marquee fw-bold" style={{ marginTop: '2em' }}>
							CREATIVE FRONTEND DEVELOPER / UI DESIGNER
						</h1>
					</Marquee>
				</motion.div>
			</div>
			<p>Hi</p>
		</>
	);
}

export default LandingPage;
