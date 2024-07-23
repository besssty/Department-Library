import { NO_INDEX_PAGE } from '@/constants/app.constants'
import { Metadata } from 'next'
import Dashboard from './Dashboard'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return <Dashboard />
}