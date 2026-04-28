'use client'

type ErrorProps = {
  error: Error;
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <main>
      <h2>Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </main>
  )
}