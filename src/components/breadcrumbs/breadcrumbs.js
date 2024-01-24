import React from 'react';
import './breadcrumbs.css';
import arrow_icon from '../assets/breadcrumbs_arrow.png';

const Breadcrumbs = (props) => {
    const {product} = props;
    return (
        <div className='breadcrumbs'>
            Home <img src={arrow_icon} alt=''/> Shop <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name} 
        </div>
    )
}

export default Breadcrumbs;