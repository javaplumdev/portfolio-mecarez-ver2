import React, { useState, useEffect, createContext } from 'react';

export const ContextVar = createContext();

export function ContextFunction({ children }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	const animateBannerBlock = {
		initial: {
			x: -100,
			opacity: 0,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 3,
			},
		},
	};

	const animateText = {
		initial: {
			x: 200,
			opacity: 0,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 5,
			},
		},
	};

	const animateNavbar = {
		initial: {
			y: -200,
			opacity: 0,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 2,
			},
		},
	};

	return (
		<ContextVar.Provider
			value={{ loading, animateBannerBlock, animateText, animateNavbar }}
		>
			{children}
		</ContextVar.Provider>
	);
}
