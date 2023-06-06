'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function findLinkCurrentPath(link){
	// return usePathname().startsWith(link) ? true : false;
	return usePathname() == link ? true : false;
}

export default function Navigation() {
	const router = useRouter();
	return (
		<nav>
			<ul>
				<li className={findLinkCurrentPath('/') ? 'active' : 'inactive' }><Link href="/">Home</Link></li>
				<li className={findLinkCurrentPath('/dashboard') ? 'active' : 'inactive' }><Link href="/dashboard">Dashboard</Link></li>
			</ul>
			<button type="button" onClick={()=> router.push('/dashboard')}>Dashboard via Router push</button>
		</nav>
	)
}
