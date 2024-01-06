import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded-3'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					ToDo List
				</Link>

				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<NavLink
							to='/home'
							className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
						>
							Home
						</NavLink>

						<NavLink
							to='/todos'
							className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
						>
							ToDos
						</NavLink>

						<NavLink
							to='/inProgress'
							className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
						>
							In progress
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};
