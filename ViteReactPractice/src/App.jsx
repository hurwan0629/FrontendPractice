import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from "./routes/index"
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
