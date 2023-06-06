'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import './navigation.css';

function findLinkCurrentPath(link){
	// return usePathname().startsWith(link) ? true : false;
	return usePathname() == link ? true : false;
}

export default function Navigation() {
	return (
		<nav className='navigation'>
			<ul>
				<li className={findLinkCurrentPath('/') ? 'active' : 'inactive' }><Link href="/">Home</Link></li>
				<li className={findLinkCurrentPath('/dashboard') ? 'active' : 'inactive' }><Link href="/dashboard">Dashboard</Link></li>
				<li className={findLinkCurrentPath('/blogs') ? 'active' : 'inactive' }><Link href="/blogs">Blogs</Link></li>
			</ul>
			{/* <button type="button" onClick={()=> useRouter().push('/dashboard')}>Dashboard via Router push</button> */}
		</nav>
	)
}
