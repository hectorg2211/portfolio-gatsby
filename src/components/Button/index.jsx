import React from 'react'


function Button({label, onClick}) {
  const primaryButton = "py-2 px-4 bg-primary text-white"

  return (
    <button type='button' onClick={onClick} className={primaryButton}>{label}</button>
  )
}

export default Button
