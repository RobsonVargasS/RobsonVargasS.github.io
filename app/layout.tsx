import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Robson Vargas - Software Engineer',
	description:
		'Welcome to my portfolio! I am a Software Engineer with a passion for building end-to-end solutions that seamlessly connect front-end interfaces with back-end systems. I focus on creating scalable, maintainable, and performant applications that deliver real-world impact. ',
	keywords: [
		'Robson Vargas',
		'Software Engineer',
		'Backend Development',
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'DevOps',
		'System Architecture',
		'Robson Vargas Portfolio',
	],
	authors: [{ name: 'Robson Vargas' }],
	creator: 'Robson Vargas',
	openGraph: {
		title: 'Robson Vargas - Software Engineer Portfolio',
		description:
			'Passionate Software Engineer creating robust solutions. Explore my projects.',
		url: 'https://robsonvargas.dev',
		siteName: 'Robson Vargas - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Robson Vargas - Software Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Robson Vargas - Software Engineer Portfolio',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
