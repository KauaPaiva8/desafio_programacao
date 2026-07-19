import { useState } from 'react'
import './App.css'

function Mapa({ localdraful, children }) {
  return (
    <div className="mapa">
      <strong>{localdraful}</strong>
      <div>{children}</div>
    </div>
  )
}

function Pin({ local }) {
  return <span className="pin">{local}</span>
}

function App() {
  const [count, setCount] = useState(0)

  const nome = 'ludogorets'
  const numero = '3'
  const nome3 = 'Marc23 cr13ny0y1980rny189 r1398c 3ry981cos'
  const numero1 = 76
  const numero2 = 69
  const numero3 = 59
  const numero4 = 98
  const nome4 = 'Lucas'
  const outraVariavel = true

  console.log(numero1 - numero2 + numero3 - numero4)

  return (
    <main className="container">
      <p className="code-block">var nome = &quot;{nome}&quot;;</p>
      <p className="code-block">numero = &quot;{numero}&quot;;</p>
      <p className="code-block">const nome3 = &quot;{nome3}&quot;;</p>
      <p className="code-block">var nome4 = &quot;{nome4}&quot;;</p>
      <p className="code-block">var outraVariavel = {String(outraVariavel)};</p>

      <button type="button" className="button" onClick={() => setCount((value) => value + 1)}>
        Me clique por favor
      </button>

      <p className="counter">Contador: <span>{count}</span></p>

      <Mapa localdraful="São Paulo">
        <Pin local="MASP" />
      </Mapa>

      <h1 className="fonte">Ola tudo bem!</h1>

      <ul className="fonte">
        <li>Nasce o dia, tímida luz no chão,</li>
        <li>vento leva sonhos pela mão,</li>
        <li>corações pulsam em leve canção,</li>
        <li>silêncio guarda doce emoção.</li>
      </ul>

      <img
        className="image"
        alt="Copa do Mundo 2026: finais"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmL03TBgz1oPNpG-j7NbW8T9FOA-o93jYeXj4-H0&amp;s=10"
      />
    </main>
  )
}

export default App
