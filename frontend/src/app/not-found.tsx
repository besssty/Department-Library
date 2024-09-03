import Heading from '@/ui/Heading'

export default function NotFound() {
	return (
		<>
			<Heading>Не знайдено</Heading>
			<p>Не вдалося знайти запитуваний ресурс</p>
			<p>
				Дивитися{' '}
				<a href={'/explorer'} className='text-primary'>
					всі книги
				</a>
			</p>
		</>
	)
}
