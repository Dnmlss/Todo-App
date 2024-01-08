import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded-3'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					ToDo List
				</Link>

				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<NavLink
							to='/home'
							className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
						>
							Home
						</NavLink>

						<NavLink
							to='/todos'
							className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
						>
							ToDos
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};
