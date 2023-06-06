import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from './navigation';

export const metadata : Metadata = {
	title: 'Hello world',
	description : 'Hello this is meta description'
}

export default function RootLayout({
	children,
} : {
	children:React.ReactNode;
}) {
	
	return (
		<html lang="en">
			<body>
			<Navigation/>
				{children}
				</body>
		</html>
	);
}