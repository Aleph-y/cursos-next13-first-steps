import type { FC, ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About me',
}

const AboutPage: FC = (): ReactNode => {
  return (
    <main>
      <h1>About Component</h1>
    </main>
  )
}

export default AboutPage
