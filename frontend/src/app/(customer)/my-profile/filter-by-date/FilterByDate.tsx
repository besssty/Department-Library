'use client'

import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import { formatDate } from '@/utils/format-date'
import { useState } from 'react'
import { UserNamesSelect } from './UserNamesSelect'
import { useFilterByDate } from './useFilterByDate'

const FilterByDate = () => {
	const {
		onSubmit,
		isSuccess,
		isError,
		formRegister,
		handleSubmit,
		errors,
		books
	} = useFilterByDate()
	const [isCopied, setIsCopied] = useState(false)

	const handleCopyToClipboard = () => {
		const textToCopy = books
			.map(
				(book, index) =>
					`${index + 1}. Автор: ${book.user.name}, Назва: ${book.title}, Дата: ${formatDate(
						book.createdAt
					)}, Посилання: ${book.link}`
			)
			.join('\n')

		navigator.clipboard.writeText(textToCopy)
		setIsCopied(true)

		setTimeout(() => setIsCopied(false), 2000)
	}

	if (isSuccess)
		return (
			<div className='grid'>
				<div className='border rounded-3xl bg-white p-4'>
					<div className='mb-4'>Список книг ✅ </div>
					<ul>
						{books.length > 0 ? (
							books.map((book, index) => (
								<>
									<li key={index}>
										<div className='flex mt-2'>
											<p className='mr-1'>{index + 1}. </p>
											<p className='mr-1'>Автор: {book.user.name}</p>
											<p className='mr-1'>Назва: {book.title}</p>
											<p className='mr-1'>Дата: {formatDate(book.createdAt)}</p>
											<a className='mr-1' href={book.link}>
												Посилання на книгу 👈
											</a>
										</div>
									</li>
								</>
							))
						) : (
							<p>Немає книг для відображення</p>
						)}
					</ul>
					<div className='mt-4'>
						<button
							className='px-4 py-2 bg-aqua text-white rounded-lg focus:outline-none'
							onClick={handleCopyToClipboard}
						>
							{isCopied ? 'Скопійовано!' : 'Копіювати в буфер обміну'}
						</button>
					</div>
					<button
						onClick={() => {
							window.location.reload()
						}}
					>
						Получити список заново
					</button>
				</div>
			</div>
		)
	if (isError)
		return (
			<div className='grid'>
				<div className='mb-4'>❌ Error! Щось пішло не так!</div>
				<a
					href='http://localhost:3000/my-profile'
					className='hover:text-aqua transition-all duration-200'
				>
					Спробувати заново 🔄
				</a>
			</div>
		)

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='rounded-3xl bg-white p-8 border-aqua border'
			>
				<>
					<div className='flex'>
						<div>
							<UserNamesSelect
								placeholder="Ім'я користувача"
								{...formRegister('userId', {
									valueAsNumber: true
								})}
							/>
						</div>
						<div className='ml-8'>
							<h1 className='font-semibold'>
								Пишіть дату в форматі
								<br />
								'yyyy-MM-dd' / 2024-12-31
							</h1>
							<div className='mt-4'>
								<Field
									{...formRegister('startDate')}
									placeholder='Від якої дати'
								/>
							</div>
							<div>
								<Field
									{...formRegister('endDate')}
									placeholder='До якої дати'
								/>
							</div>
						</div>
					</div>

					<Button type='submit' variant='white' size='md'>
						Отримати список книг
					</Button>
				</>
			</form>
		</>
	)
}

export default FilterByDate
