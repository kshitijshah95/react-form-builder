import React from 'react';
import Link from './Link';

const Header = () => {
	return (
		<div className='nav nav-tabs'>
			<Link href='/' className='nav-item nav-link'>
				Form Builder App
			</Link>
			<Link href='/preview' className='nav-item nav-link'>
				Preview
			</Link>
		</div>
	);
};

export default Header;
