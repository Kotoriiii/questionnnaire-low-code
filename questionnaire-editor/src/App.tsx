import { Suspense } from 'react'
import Routes from './router'
import 'antd/dist/reset.css'

import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'

const px2rem = px2remTransformer({
  rootValue: 16,
})

function App() {
  return (
    <StyleProvider transformers={[px2rem]}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </StyleProvider>
  )
}

export default App
