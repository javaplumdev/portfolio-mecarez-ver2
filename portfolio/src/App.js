import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import ContentHolder from './components/ContentHolder';
// Context
import { ContextFunction } from './context/ContextFile';

function App() {
	return (
		<ContextFunction>
			<div className="App">
				<ContentHolder />
			</div>
		</ContextFunction>
	);
}

export default App;
