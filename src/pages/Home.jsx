// The homepage of the app
import { useState } from 'react';
import {
	H1,
	ArticleText,
	Nav,
	NavButton,
	SectionBanner,
	SocialMediaButton,
} from '../utils/components';
import { scrollToTop } from '../utils/util';

export default function Home() {
	const [projects, setProjects] = useState([
		{
			name: 'Portfolio',
			description: '',
			image: '',
			links: ['', ''],
			skills: ['', '', '', '', ''],
		},
		{
			name: 'Todos App',
			description: '',
			image: '',
			links: ['', ''],
			skills: ['', '', '', '', ''],
		},
		{
			name: 'Mock eShop',
			description: '',
			image: '',
			links: ['', ''],
			skills: ['', '', '', '', ''],
		},
		{
			name: 'Message Board',
			description: '',
			image: '',
			links: ['', ''],
			skills: ['', '', '', '', ''],
		},
		{
			name: 'Memory Game',
			description: '',
			image: '',
			links: ['', ''],
			skills: ['', '', '', '', ''],
		},
		{
			name: 'Tic-tac-toe',
			description: '',
			image: '',
			links: ['', ''],
			skills: ['', '', '', '', ''],
		},
	]);

	return (
		<>
			<header>
				<div className='home-container'>
					<H1>
						Hello, I'm <span className='developer-name'>Brandyn Coverdill</span>
						.
					</H1>
					<ArticleText>I'm a Web Developer.</ArticleText>
					<div className='home-social-media-container'>
						<SocialMediaButton size={'large'} media={'github'} />
						<SocialMediaButton size={'large'} media={'linkedin'} />
						<SocialMediaButton size={'large'} media={'twitter'} />
						<SocialMediaButton size={'large'} media={'facebook'} />
					</div>
				</div>
				<Nav>
					<NavButton refLink={'#'} onClick={() => scrollToTop()}>
						Home
					</NavButton>
					<NavButton refLink={'#projects'} onClick={() => {}}>
						Projects
					</NavButton>
					<NavButton refLink={'#jouney'} onClick={() => {}}>
						Development Journey
					</NavButton>
					<NavButton refLink={'#contact'} onClick={() => {}}>
						Contact
					</NavButton>
				</Nav>
			</header>
			<main className='main-container'>
				<section id='projects'>
					<SectionBanner>
						<H1>Projects</H1>
					</SectionBanner>
				</section>
				<section id='journey'>
					<SectionBanner>
						<H1>Development Journey</H1>
					</SectionBanner>
				</section>
				<section id='contact'>
					<SectionBanner>
						<H1>Contact</H1>
					</SectionBanner>
				</section>
			</main>
		</>
	);
}
