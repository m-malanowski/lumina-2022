import React from 'react'
import { motion } from 'framer-motion'

export function SplitText({ children,  ...rest  }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <span
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden', padding: 0, margin: 0, lineHeight: 1 }}
      >
        <motion.span
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform', padding: 0, margin: 0, lineHeight: 1 }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.span>
      </span>
    )
  })
}