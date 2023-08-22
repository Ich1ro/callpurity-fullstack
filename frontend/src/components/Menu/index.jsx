import React from 'react';
import './Menu.css';

import {Add, View, Home, Phone, Upload, Logout} from '../../icons'

import { NavLink } from 'react-router-dom';

const nonActive = '#3C5163';

const Menu = () => {
	return (
		<div className="menu-wrapper">
			<NavLink to={'/dashboard'}
				className={({ isActive, isPending }) =>
					isPending ? 'dashboard' : isActive ? 'active dashboard' : 'dashboard'
				}>
				<div className="dashboard-info">
					<Home fill={nonActive} />
					Dasboard
				</div>
			</NavLink>
			<NavLink
				to={'/add-new'}
				className={({ isActive, isPending }) =>
					isPending ? 'menu-item' : isActive ? 'menu-item active' : 'menu-item'
				}>
				<Add fill={nonActive} />
				Add New Client Record
			</NavLink>
			<NavLink
				to={'/view'}
				className={({ isActive, isPending }) =>
					isPending ? 'menu-item' : isActive ? 'active menu-item' : 'menu-item'
				}>
				<View fill={nonActive} />
				View / Modify Existing Client
			</NavLink>
			<NavLink
				to={'/phone'}
				className={({ isActive, isPending }) =>
					isPending ? 'menu-item' : isActive ? 'active menu-item' : 'menu-item'
				}>
				<Phone />
				Telephone Number Search
			</NavLink>
			<NavLink
				to={'/upload'}
				className={({ isActive, isPending }) =>
					isPending ? 'menu-item' : isActive ? 'active menu-item' : 'menu-item'
				}>
				<Upload />
				Process FTC Upload
			</NavLink>
			<div className="menu-line"></div>
			<NavLink
				to={'/logout'}
				className={({ isActive, isPending }) =>
					isPending ? 'menu-item' : isActive ? 'active menu-item' : 'menu-item'
				}>
				<Logout />
				Log out
			</NavLink>
		</div>
	);
};

export default Menu;
