import { useState } from 'react';

export function useProjects() {
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

	return [projects, setProjects];
}
