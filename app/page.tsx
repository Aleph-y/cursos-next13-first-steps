import type { FC, ReactNode } from 'react'

const data = [
  { id: '5fb28d9e-b1b0-49f3-bcaf-1b7e122502d3', name: 'Primero' },
  { id: '22994187-face-4aab-bd51-ef086b143340', name: 'Segundo' },
]

const newFunct = (x: number): void => {
  console.log(x)
}

const Home: FC = (): ReactNode => {
  newFunct(1)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button type="button" className="new" aria-label="Boton fachero">
        Boton
      </button>
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default Home
