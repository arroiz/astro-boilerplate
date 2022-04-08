import { useState } from 'react'

export default function Counter({ count: initialCount }: { count?: number }) {
  const [count, setCount] = useState(initialCount || 0)

  const add = () => setCount((i) => i + 1)
  const subtract = () => setCount((i) => i - 1)

  return (
    <div className="bg-red-500 flex gap-4 rounded-xl">
      <button
        onClick={subtract}
        className="text-xl px-2 flex justify-center items-center"
      >
        -
      </button>
      <pre className="text-xl">{count}</pre>
      <button
        onClick={add}
        className="text-xl px-2 flex justify-center items-center"
      >
        +
      </button>
    </div>
  )
}
