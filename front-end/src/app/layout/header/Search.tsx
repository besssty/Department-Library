import { useFilters } from '@/app/explorer/useFilters'
import { FC, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const { updateQueryParams } = useFilters()
	const handleChange = (e: any) => setSearchTerm(e.target.value)

	return (
		<div className='text-black flex'>
			<div className='border-aqua border rounded-3xl overflow-hidden flex'>
				<input
					type='text'
					className='bg-white text-sm py-2 px-4 text-black outline-none'
					value={searchTerm}
					placeholder='Загалний пошук'
					onChange={handleChange}
				/>

				<button
					className='flex items-center justify-center p-2.5 bg-black text-white'
					onClick={() => {
						updateQueryParams('searchTerm', searchTerm.toString())
					}}
				>
					<BsSearch />
				</button>
			</div>
		</div>
	)
}

export default Search
