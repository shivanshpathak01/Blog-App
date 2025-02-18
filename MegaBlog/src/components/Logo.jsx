import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img 
        src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572-768x591.png"
        alt="Blog Logo"
        className="w-full"
        style={{ width }}
      />
    </div>
  )
}

export default Logo
