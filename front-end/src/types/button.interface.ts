import { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'black' | 'white'
	size?: 'sm' | 'md' | 'lg'
}
