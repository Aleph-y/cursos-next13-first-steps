import type { FC, ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Description',
}

const ContactPage: FC = (): ReactNode => {
  return (
    <main>
      <h1>Contact</h1>
    </main>
  )
}

export default ContactPage
