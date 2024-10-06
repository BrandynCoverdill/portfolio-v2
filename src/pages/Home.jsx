// The homepage of the app
import { useProjects } from '../utils/hooks';
import {
	H1,
	ArticleText,
	H2,
	Nav,
	NavButton,
	SectionBanner,
	SocialMediaButton,
} from '../utils/components';
import { scrollToTop } from '../utils/util';

export default function Home() {
	const [projects, setProjects] = useProjects();

	return (
		<>
			<header>
				<div className='home-container'>
					<H1>
						Hello, I'm <span className='developer-name'>Brandyn Coverdill</span>
						.
					</H1>
					<H2>I'm a Web Developer.</H2>
					<div className='home-social-media-container'>
						<SocialMediaButton size={'medium'} media={'github'} />
						<SocialMediaButton size={'medium'} media={'linkedin'} />
						<SocialMediaButton size={'medium'} media={'twitter'} />
						<SocialMediaButton size={'medium'} media={'facebook'} />
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
						<H2>Projects</H2>
					</SectionBanner>
				</section>
				<section id='journey'>
					<SectionBanner>
						<H2>Development Journey</H2>
					</SectionBanner>
				</section>
				<section id='contact'>
					<SectionBanner>
						<H2>Contact</H2>
					</SectionBanner>
				</section>
			</main>
		</>
	);
}
