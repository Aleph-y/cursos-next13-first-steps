import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'

import type { FC, ReactNode } from 'react'

import { ActiveLink } from '..'

interface NavItemsType {
  path: string
  display: string
}

const navItems: NavItemsType[] = [
  { path: '/about', display: 'About' },
  { path: '/contact', display: 'Contact' },
  { path: '/pricing', display: 'Pricing' },
]

export const Navbar: FC = (): ReactNode => {
  return (
    <nav className="flex bg-blue-600 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1" />
      {navItems.map(({ path, display }: NavItemsType) => (
        <ActiveLink key={path} path={path} display={display} />
      ))}
    </nav>
  )
}
