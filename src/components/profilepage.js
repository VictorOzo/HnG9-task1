import React from 'react';
import styled from 'styled-components';
import profileimg from '../img/profileimg.png';
import socialimg from '../img/socialimg.png';
import Icon from '../img/Icon.png';
import mobileimg from '../img/mobileimg.png';
import '../css/profile.css';

const ProfileImg = styled.img`
	margin-top: 40px;
`;
const Mobileimg = styled.img`
	display: none;
	@media screen and (max-width: 768px) {
		display: flex;
		position: absolute;
		width: 40px;
		height: 40px;
		right: 20px;
		top: 40px;
	}
`;
const Profile = styled.div``;

const Profilelinks = styled.div``;

const SocialSection = styled.img`
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 24px 0px;
		gap: 64px;
		width: 375px;
		height: 72px;
		margin-bottom: 24px;
	}
`;
const Iconimg = styled.img`
	position: absolute;
	width: 20px;
	height: 20px;
	right: 300px;
	top: 55px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const SlackName = styled.div`
	display: none;
`;
const ProfileName = styled.div`
	display: flex;
	margin-top: 24px;
	flex-direction: flex;
	height: 30px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 30px;
	justify-content: center;
	align-items: center;
	color: #101828;
`;

const Profilepage = () => {
	return (
		<Profile>
			<ProfileImg src={profileimg} className='profile_img' />
			<Iconimg src={Icon} />
			<Mobileimg src={mobileimg} />
			<ProfileName className='twitter'>Victor Ozokwelu</ProfileName>
			<SlackName className='slack'>Victor Ozokwelu</SlackName>
			<Profilelinks className='profilelinks'>
				<ul>
					<li>
						<a href='https://twitter.com/vic_ozoo'>Twitter Link</a>
					</li>
					<li>
						<a href='https://training.zuri.team/'>Zuri Team</a>
					</li>
					<li>
						<a href='http://books.zuri.team'>Zuri Books</a>
					</li>
					<li>
						<a href='https://books.zuri.team/'>Python Books</a>
					</li>
					<li>
						<a href='https://background.zuri.team'>
							Background checks for Coders
						</a>
					</li>
					<li>
						<a href='https://books.zuri.team/design-rules'>
							Design Books
						</a>
					</li>
				</ul>
			</Profilelinks>
			<SocialSection className='socialimg' src={socialimg} />
		</Profile>
	);
};

export default Profilepage;
