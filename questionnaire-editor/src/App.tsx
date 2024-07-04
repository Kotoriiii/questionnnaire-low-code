import { Suspense } from 'react'
import Routes from './router'
import 'antd/dist/reset.css'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes />
    </Suspense>
  )
}

export default App
