import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export const Navigation = () => {
  const [activePage, setActivePage] = useState(0)

  const handleMenuClick = i => {
    setActivePage(i)
    const targetElement = document.getElementsByClassName(`subpage-${i}`)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      console.log('scrolling')
    }
  }
  return (
    <motion.ul variants={variants}>
      {itemIds.map(i => (
        <MenuItem
          i={i}
          key={i}
          // className={`subpage-${i}`}
        />
      ))}
    </motion.ul>
  )
}

const itemIds = [0, 1, 2, 3, 4]
