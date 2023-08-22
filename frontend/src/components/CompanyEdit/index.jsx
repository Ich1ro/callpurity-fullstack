import React, { useEffect, useState } from 'react';
import './CompanyEdit.css';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Save } from '../../icons';
import { fetchDashboardById, updateDashboardItem } from '../../service/dashboardSlice';

const CompanyEdit = () => {
	const [data, setData] = useState('')
	const dispatch = useDispatch();
	const { id } = useParams();
	const company = useSelector(state => state.dashboard.dashboard);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();

	const onSubmit = data => {
		dispatch(updateDashboardItem(data));
	};

	useEffect(() => {
		dispatch(fetchDashboardById(id))
		setData(company)
		reset({...company})
	}, [])

	useEffect(() => {
		dispatch(fetchDashboardById(id))
	}, [dispatch, id])

	return (
		<div>
			{data && (<form onSubmit={handleSubmit(onSubmit)}>
				<div className="input-item">
					<div className="input-title">Company Name</div>
					<input type="text" {...register('company', { required: true })} className="add-input"/>
					{errors.company && <span className="error-span">This field is required</span>}
				</div>
				<div className="input-item">
					<div className="input-title">Adress</div>
					<input type="text" {...register('adress', { required: true })} className="add-input" />
					{errors.adress && <span className="error-span">This field is required</span>}
				</div>
				<div className="input-item">
					<div className="input-title">City</div>
					<input type="text" {...register('city', { required: true })} className="add-input" />
					{errors.city && <span className="error-span">This field is required</span>}
				</div>
				<div className="input-item">
					<div className="input-title">State</div>
					<input type="text" {...register('state', { required: true })} className="add-input" />
					{errors.state && <span className="error-span">This field is required</span>}
				</div>
				<div className="input-item">
					<div className="input-title">Zip Code</div>
					<input type="text" {...register('zip', { required: true })} className="add-input" />
					{errors.zip && <span className="error-span">This field is required</span>}
				</div>
				<div className="input-item">
					<div className="input-title">Contact Person</div>
					<input type="text" {...register('person', { required: true })} className="add-input" />
					{errors.person && <span className="error-span">This field is required</span>}
				</div>
				<div className="input-item">
					<div className="input-title">Phone</div>
					<input type="phone" {...register('number', { required: true })} className="add-input" />
					{errors.phone && <span className="error-span">This field is required</span>}
				</div>
				<div className="input-item">
					<div className="input-title">E-mail</div>
					<input type="email" {...register('email', { required: true })} className="add-input" />
					{errors.email && <span className="error-span">This field is required</span>}
				</div>
				<div className="input-item">
					<div className="input-title">Registration Date</div>
					<input type="date" {...register('date', { required: true })} className="add-input" />
					{errors.date && <span className="error-span">This field is required</span>}
				</div>
				<div className="input-item"> </div>
				<button type="submit" className="save add-input">
					Save
					<Save width={'20px'} />
				</button>
			</form>)}
		</div>
	);
};

export default CompanyEdit;