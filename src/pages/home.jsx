import React from 'react'
import { MainForm } from '../forms/main-form'
import './home.css'

const HomePage = () => {
  return (
    <div className='container'>
      <div className='left-content'>
        <h3 className='form-title'>Learn to code by watching others</h3>
        <p className='form-description'>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className='form-container'>
        <div className='form-trial-banner'>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>
            Try it free 7 days then{' '}
            <span style={{ fontSize: 15, fontWeight: 400, color: '#fff' }}>
              $20/mo. thereafter
            </span>
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
          <MainForm />
        </div>
      </div>
    </div>
  )
}

export default HomePage
