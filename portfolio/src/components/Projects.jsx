import { Container } from 'react-bootstrap';

const Projects = () => {
	return (
		<div className="mt-5">
			<Container>
				<div>
					<h1>Projects</h1>
					<b>Made with love.</b>
				</div>
				<div className="mt-5 d-flex justify-content-around">
					<p style={{ fontSize: '64px' }}>01</p>
					<div>
						<p>Image</p>
					</div>
					<div>
						<h2>Project name</h2>
						<h2>Project type</h2>
						<h2>Project details</h2>
						<button>view work</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Projects;
