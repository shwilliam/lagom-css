import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('input resets', module)
  .add(
    'reset-list', () => (<>
      <ul className="reset-list">
        <li>reset-list</li>
      </ul>
      <ol className="reset-list">
        <li>reset-list</li>
      </ol>
    </>)
  )
  .add(
    'reset-input', () => (
      <input type="text" value="reset-input" />
    )
  )
  .add(
    'reset-button', () => (
      <button type="button" className="reset-button">
        reset-button
      </button>
    )
  )
