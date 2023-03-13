import React from 'react'

const SettingLink = ({icon, name}) => {
  return (
    <div className=' mx-4 flex items-center overflow-hidden'>
      {icon}
      <div className='inline-block px-1'>{name}</div>
    </div>
  )
}

export default SettingLink
