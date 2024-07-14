import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/header';
import { inter } from '@/utils/fonts';

export const metadata: Metadata = {
	title: 'Zargo',
	description: 'Cargo Web App for Clients code by @themuuln',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
					<Header />
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
