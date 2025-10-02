// src/pages/Home/Home.jsx
import { useState } from 'react'
import Button from '@/components/Button/Button'
import styles from './Home.module.css'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <h1>Bienvenida, Silvi 👋</h1>
      <p>Vite + React listos. Probemos el botón:</p>

      <div className={styles.actions}>
        <Button onClick={() => setCount((c) => c + 1)}>Contar: {count}</Button>
        <Button variant="secondary" onClick={() => setCount(0)}>
          Reiniciar
        </Button>
      </div>
    </div>
  )
}