import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { getSocialMedia } from '../utils/util';

export default function SocialMediaButton({ size, media }) {
	const social = getSocialMedia(media);

	switch (social.name) {
		case 'Github':
			return (
				<a href={social.link} target='_blank' className='SocialMediaButton'>
					<FaGithub fontSize={size} color='white' />
				</a>
			);
		case 'LinkedIn':
			return (
				<a href={social.link} target='_blank' className='SocialMediaButton'>
					<FaLinkedin fontSize={size} color='white' />
				</a>
			);
		case 'Twitter':
			return (
				<a href={social.link} target='_blank' className='SocialMediaButton'>
					<FaXTwitter fontSize={size} color='white' />
				</a>
			);
		case 'Facebook':
			return (
				<a href={social.link} target='_blank' className='SocialMediaButton'>
					<FaFacebook fontSize={size} color='white' />
				</a>
			);
	}
}
