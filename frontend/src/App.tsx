import { useState } from 'react'
import { Button} from "@/components/ui/button.tsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Button>Click Save</Button>
  )
}

export default App
