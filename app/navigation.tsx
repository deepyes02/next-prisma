'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import './navigation.scss';

function findLinkCurrentPath(link) {
	return usePathname() == link ? true : false;
}

export default function Navigation() {
	const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
		(e.target as HTMLInputElement).checked ? document.body.classList.add('darkMode') :
		document.body.classList.remove('darkMode');
	}

	
	return (
		<nav className='navigation'>
			<ul>
				<li><Link className={findLinkCurrentPath('/') ? 'active' : 'inactive'} href="/">Home</Link></li>
				<li><Link className={findLinkCurrentPath('/dashboard') ? 'active' : 'inactive'} href="/dashboard">Dashboard</Link></li>
				<li><Link className={findLinkCurrentPath('/blogs') ? 'active' : 'inactive'} href="/blogs">Blogs</Link></li>
			</ul>
			<input id="dark_mode" type='checkbox' value='dark_mode' name='dark_mode' onClick={handleClick} />
		</nav>
	)
}
