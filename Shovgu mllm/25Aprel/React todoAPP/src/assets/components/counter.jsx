import React from 'react'

const counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={count} >Dec</button>
        <span>0</span>
        <button>Inc</button>
    </div>
  )
}

export default counter