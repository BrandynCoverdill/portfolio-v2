export default function NavButton({ children, refLink, onClick }) {
	return (
		<a className='nav-button' href={refLink}>
			{children}
		</a>
	);
}
