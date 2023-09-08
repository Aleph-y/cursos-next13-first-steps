import type { FC, ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Description',
}

const PricingPage: FC = (): ReactNode => {
  return (
    <main>
      <h1>Pricing</h1>
    </main>
  )
}

export default PricingPage
