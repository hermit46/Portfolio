import { Button, styled } from '@mui/material'
import React, { useState } from 'react'

const ResumeLink =
  'https://drive.google.com/file/d/18FUOAOJRmC7bj52miMJwQOvjbECSlDq0/view?usp=sharing'

const openResume = () => {
  window.open(ResumeLink, '_blank')
}

const ResumeButton = () => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <button
      onClick={openResume}
      style={{
        backgroundColor: hover ? '#c6e8c9' : '#000000',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        flexGrow: 1,
        paddingBottom: 4,
        cursor: 'pointer',
        display: 'flex'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Resume
    </button>
  )
}

export default ResumeButton
