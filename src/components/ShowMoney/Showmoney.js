import React from 'react'
import { useSelector } from 'react-redux'
import "./styles.css"
function Showmoney() {
  const totalmoney = useSelector(state => state.money.value)
  return (
    <div className='money'>
      ${totalmoney}
    </div>
  )
}

export default Showmoney