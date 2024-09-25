import React from 'react'
import { useColor } from '../contextProvider'


function componentA() {
    const {colorToggler} = useColor()
  return (
    <div>
        <button onClick={colorToggler}>color toggler</button>

    </div>
  )
}

export default componentA