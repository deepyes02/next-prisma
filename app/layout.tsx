import { Metadata } from 'next';
import Navigation from './navigation';
import './main.scss'

export const metadata : Metadata = {
	title: 'Hello world',
	description : 'Hello this is meta description'
}

export default function RootLayout({
	children
} : {
	children:React.ReactNode;
	// blogs: React.ReactNode;
	// dashboard: React.ReactNode;
}) {
	
	return (
		<html lang="en">
			<body>
			<Navigation/>
				{children}
				{/* {props.blogs}
				{props.dashboard} */}
				</body>
		</html>
	);
}