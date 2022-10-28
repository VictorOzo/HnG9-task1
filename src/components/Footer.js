import React from 'react';
import styled from 'styled-components';
import I4G from '../img/I4G.png';
import zuriimg from '../img/zuriimg.png';

const Footerimg = styled.img``;
const Zuriimg = styled.img``;

const Footer = () => {
	return (
		<div className='footer'>
			<Zuriimg src={zuriimg} />
			<div className='footertext'>
				<p>HNG Internship 9 Frontend Task</p>
			</div>
			<Footerimg src={I4G} />
		</div>
	);
};

export default Footer;
