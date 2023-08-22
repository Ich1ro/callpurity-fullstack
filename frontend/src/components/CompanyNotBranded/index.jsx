import React, { useEffect } from 'react';
import './CompanyNotBranded.css';
import TableNumbers from '../TableNumbers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardById } from '../../service/dashboardSlice';
import { useParams } from 'react-router-dom';

const CompanyNotBranded = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const company = useSelector(state => state.dashboard.dashboard);

	const filteredNumbers = company.numbers ? company.numbers.filter(number => number['AT&T Branded'] === 'N') : null;

	console.log(filteredNumbers);

	const title = {
		first: 'Caller Number',
		second: 'Status',
		third: 'State'
	};

	useEffect(() => {
		dispatch(fetchDashboardById(id));
	}, []);

	return (
		<div>
			{filteredNumbers !== null ? (
				<TableNumbers title={title} data={filteredNumbers} />
			) : (
				<div>You don't have Not Branded numbers</div>
			)}
		</div>
	);
};

export default CompanyNotBranded;
