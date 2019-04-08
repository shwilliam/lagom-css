import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('display', module)
  .add(
    'dn', () => (
      <span style={{ outline: '1px solid', display: 'inline-block', minWidth: '1px', minHeight: '1px' }}>
        <span className="dn">
          dn
        </span>
      </span>
    )
  )

storiesOf('display', module)
  .add(
    'db', () => (
      <span className="db" style={{ outline: '1px solid' }}>
        db
      </span>
    )
  )

storiesOf('display', module)
  .add(
    'di', () => (
      <div className="di" style={{ outline: '1px solid' }}>
        di
      </div>
    )
  )

storiesOf('display', module)
  .add(
    'dib', () => (
      <div className="dib" style={{ outline: '1px solid', width: '80px' }}>
        dib
      </div>
    )
  )
