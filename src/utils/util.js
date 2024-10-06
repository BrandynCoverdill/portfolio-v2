/**
 * Scroll to the top of the page.
 */
export function scrollToTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
}

export function getSocialMedia(media) {
	let social = {
		name: '',
		link: '',
	};

	switch (media) {
		case 'github':
			social = {
				name: 'Github',
				link: 'https://github.com/BrandynCoverdill',
			};
			break;
		case 'linkedin':
			social = {
				name: 'LinkedIn',
				link: 'https://www.linkedin.com/in/brandyn-coverdill/',
			};
			break;
		case 'twitter':
			social = {
				name: 'Twitter',
				link: 'https://x.com/BrandynTCov',
			};
			break;
		case 'facebook':
			social = {
				name: 'Facebook',
				link: 'https://www.facebook.com/brandyn.coverdill/',
			};
			break;
	}
	return social;
}
