import React from 'react';
// Import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Icon = ({name}) => (
	<div>
		{
			name === 'circle' ? 'O' // <FaRegCircle className='icon' /> :
				: name === 'cross' ? 'X' // <FaTimes className='icon' /> :
					: ' ' // <FaPen className='icon' />
		}
	</div>
);

export default Icon;
