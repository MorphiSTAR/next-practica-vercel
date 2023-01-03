import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const Navbar = () => {
	const menuItems = [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'About',
			href: '/about'
		},
		{
			text: 'Contact',
			href: '/contacto'
		},
		{
			text: 'Pricing',
			href: '/pricing'
		},
	];
	
	return (
		<nav className={styles['menu-container']}>
			
			{menuItems.map((el)=>(
			<ActiveLink key={el.href} text={el.text} href={el.href} />
			))}

		{	/*<ActiveLink text="Home" href="/" />
			<ActiveLink text="Templante" href="/templante" />
			<ActiveLink text="About" href="/about" />
			<ActiveLink text="Contact" href="/contacto" />*/}
		</nav>
	);
};

export default Navbar;
