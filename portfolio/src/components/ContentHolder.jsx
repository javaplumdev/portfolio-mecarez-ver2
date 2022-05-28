// React
import React, { useContext } from 'react';
// Components
import LandingPage from './Landingpage';
import LoadingScreen from './LoadingScreen';

// Context
import { ContextVar } from '../context/ContextFile';

function ContentHolder() {
	const { loading } = useContext(ContextVar);

	return <>{loading ? <LoadingScreen /> : <LandingPage />}</>;
}

export default ContentHolder;
