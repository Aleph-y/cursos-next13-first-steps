import { Navbar } from '@/components'
import type { FC, ReactNode } from 'react'

export interface GeneralLayoutProps {
  children: ReactNode
}

export const GeneralLayout: FC<GeneralLayoutProps> = ({ children }): ReactNode => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span>Fola mundo</span>
        {children}
      </main>
    </>
  )
}

export default GeneralLayout
