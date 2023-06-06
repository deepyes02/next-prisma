import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'DAshboard',
	description: "Metadata for dashboard"
  };

export default function DashboardLayout({
	children,
  }: {
	children: React.ReactNode;
  }) {
	return (<section>{children}</section>);
  }