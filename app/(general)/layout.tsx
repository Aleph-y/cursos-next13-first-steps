import type { FC, ReactNode } from 'react'

export interface GeneralLayoutProps {
  children: ReactNode
}

export const GeneralLayout: FC<GeneralLayoutProps> = ({ children }): ReactNode => {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

export default GeneralLayout
