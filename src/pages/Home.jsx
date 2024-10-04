// The homepage of the app
import { H1, ArticleText, Nav, NavButton } from '../utils/components';
import { scrollToTop } from '../utils/util';

export default function Home() {
	return (
		<>
			<header>
				<div className='home-container'>
					<H1>
						Hello, I'm <span className='developer-name'>Brandyn Coverdill</span>
						.
					</H1>
					<ArticleText>I'm a Web Developer.</ArticleText>
				</div>
				<Nav>
					<NavButton refLink={'#'} onClick={() => scrollToTop()}>
						Home
					</NavButton>
					<NavButton refLink={'#projects'} onClick={() => {}}>
						Projects
					</NavButton>
					<NavButton refLink={'#about'} onClick={() => {}}>
						Development Journey
					</NavButton>
					<NavButton refLink={'#contact'} onClick={() => {}}>
						Contact
					</NavButton>
				</Nav>
			</header>
			<main></main>
		</>
	);
}
