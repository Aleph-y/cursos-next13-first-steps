import Link from 'next/link'
import type { FC, ReactNode } from 'react'

const Home: FC = (): ReactNode => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-5xl">Next 13</span>
      <Link href="/about">About Page</Link>
    </main>
  )
}

export default Home
