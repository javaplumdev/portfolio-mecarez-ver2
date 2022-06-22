// React
import React, { useContext } from 'react';
// Components
import LandingPage from './Landingpage';
import LoadingScreen from './LoadingScreen';
import Projects from './Projects';

// Context
import { ContextVar } from '../context/ContextFile';

function ContentHolder() {
	const { loading } = useContext(ContextVar);

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<>
					<LandingPage />
					<Projects />
				</>
			)}
		</>
	);
}

export default ContentHolder;
