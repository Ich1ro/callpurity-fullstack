import React from 'react';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
	return (
		<div className="wrapper">
			<div className="main">
				<SideBar className="sidebar-wrapper" />
				<div className="content">
					<Header className="header-wrapper" />
					<Outlet />
				</div>
			</div>
			<Footer className="footer-wrapper" />
		</div>
	);
}

export default App;
