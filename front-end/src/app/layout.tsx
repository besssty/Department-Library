import '@/assets/styles/globals.scss'
import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/app.constants'
import Providers from '@/providers/Providers'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { PropsWithChildren } from 'react'
import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg',
		shortcut: '/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['library@umsf.dp.ua']
	},
	applicationName: SITE_NAME,
	authors: {
		name: SITE_NAME,
		url: `https://${SITE_NAME}`
	},
	publisher: SITE_NAME
}

const montserrat = Montserrat({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-monts'
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='uk' className={montserrat.variable}>
			<body>
				<Providers>
					<div className='layout'>
						<Header />
						<div className='w-full xl:flex xl:mt-5 xl:mb-5'>
							<Sidebar />
							<main>{children}</main>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	)
}
