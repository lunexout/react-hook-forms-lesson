import React from 'react'

export const IconError = ({ fill = '#FF7979' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <circle cx='12' cy='12' r='12' fill={fill} />
      <rect x='11' y='6' width='2' height='9' rx='1' fill='white' />
      <rect x='11' y='17' width='2' height='2' rx='1' fill='white' />
    </svg>
  )
}
