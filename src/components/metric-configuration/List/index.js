import React from 'react'
import './index.css'

const List = ({ title, children }) => {
  return (
    <div className='list'>
      <div className='list-title'>
        <span>{title}</span>
      </div>
      <div className='list-content'>
        { children }
      </div>
    </div>
  )
}

export default List