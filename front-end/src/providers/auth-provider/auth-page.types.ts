import { NextPage } from 'next'

export type TypeRoles = {
	isAdmin?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentsAuthFields = { Component: TypeRoles }
