// React
import React from 'react';
// React loader
import { MutatingDots } from 'react-loader-spinner';

function LoadingScreen() {
	return (
		<div className="loading d-flex align-items-center justify-content-center">
			<MutatingDots
				ariaLabel="loading-indicator"
				color="white"
				secondaryColor="white"
			/>
		</div>
	);
}

export default LoadingScreen;
