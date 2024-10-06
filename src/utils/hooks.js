import { useState } from 'react';

export function useProjects() {
	const [projects, setProjects] = useState([
		{
			name: 'Todos App',
			description:
				'A project created to keep track of your daily tasks. Just like sticky notes - but with more functionality!',
			image: '../images/todos.png',
			links: [
				'https://brandyn-todos-v2.netlify.app/',
				'https://github.com/BrandynCoverdill/todos-v2',
			],
			skills: ['JavaScript', 'React', 'Vite', 'Material UI', 'localStorage'],
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

	return [projects, setProjects];
}
