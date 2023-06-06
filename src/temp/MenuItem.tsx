import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import selfIcon from '../assets/yqIcon.jpg'
import boulderIcon from '../assets/boulder.png'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}
// TODO: set proper array of colors, perhaps changes with every refresh, but has gradient effect
// If going for black gradient background, consider just black outlines
const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']
const texts = [
  'About Me',
  'Work Experience',
  'Side Projects',
  'Hobbies',
  'Get in Touch'
]
const icons = [selfIcon, boulderIcon]

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}`, opacity: `85%` }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`subpage-${i}`}
    >
      {/* <div className="icon-placeholder" style={style}></div> */}
      {/* TODO: add onclick functionality to given subsection of page */}
      <Typography className="text-placeholder" style={style}>
        {texts[i]}
      </Typography>
    </motion.li>
  )
}
