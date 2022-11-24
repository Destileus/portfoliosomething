// App.tsx
import ClickCount from './components/example/clickCount'
import SomeExampleComponent from './components/example/someExampleComponent'
import React from 'react'

const App: React.FC = () => {
  return (
    <div>
      <SomeExampleComponent />
      <ClickCount/>
    </div>
  )
}

export default App