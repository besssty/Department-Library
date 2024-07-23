'use client'

import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import { FC } from 'react'
import { useCurentUserId } from '../../../../hooks/queries/useCurrentUserId'
import { Select } from './CategorySelect'
import { useCreateBook } from './useCreateBook'

const CreateBook: FC = () => {
	const { onSubmit, isSuccess, isError, formRegister, handleSubmit, errors } =
		useCreateBook()

	const { currentUserId } = useCurentUserId()

	if (isSuccess)
		return (
			<div className='grid'>
				<div className='mb-4'>✅ Книгу успішно додано!</div>
				<a
					href='http://localhost:3000/my-profile'
					className='hover:text-aqua transition-all duration-200'
				>
					Додати ще 🔄
				</a>
			</div>
		)
	if (isError)
		return (
			<div className='grid'>
				<div className='mb-4'>❌ Error! Книгу не додано!</div>
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
			<div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-3xl bg-white  p-8 m-auto border-aqua border'
				>
					<>
						<div className='grid xl:grid-cols-2'>
							<Select
								placeholder='Категорія'
								{...formRegister('categoryId', {
									valueAsNumber: true,
									required: "Категорія обовя'зкова"
								})}
							/>
							<Field
								{...formRegister('userId', {
									valueAsNumber: true
								})}
								placeholder='Ваш ID'
								error={errors.title?.message}
								value={currentUserId || ''}
								disabled
							/>
							<Field
								className='mr-3'
								{...formRegister('title', {
									required: "Назва обовя'зкова"
								})}
								placeholder='Назва книги'
								error={errors.title?.message}
							/>
							<Field
								className='mr-3'
								{...formRegister('link', {
									required: "Посилання обовя'зкове"
								})}
								placeholder='Посилання на матеріал'
								error={errors.link?.message}
							/>
						</div>

						<Button type='submit' variant='white' size='md'>
							Додати книгу!
						</Button>
					</>
				</form>
			</div>
		</>
	)
}

export default CreateBook
