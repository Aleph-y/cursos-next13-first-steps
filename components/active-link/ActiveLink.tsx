'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { FC, ReactNode } from 'react'

import style from './ActiveLink.module.css'

export interface ActiveLinkProps {
  path: string
  display: string
}

export const ActiveLink: FC<ActiveLinkProps> = ({ path, display }): ReactNode => {
  const pathName = usePathname()

  return (
    <Link
      className={`${style.link} ${pathName === path && style.active_link}`}
      href={path}
    >
      {display}
    </Link>
  )
}
