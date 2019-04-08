import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('clearfix', module)
  .add(
    'cf', () => (<>
    <div className="cf" style={{ outline: '1px solid' }}>
      <span style={{ float: 'left' }}>
        cf
      </span>
    </div>
    </>)
  )
