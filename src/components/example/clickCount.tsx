import React, { useState } from 'react'

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default ClickCount
