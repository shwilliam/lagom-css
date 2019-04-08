import React from 'react'
import { storiesOf } from '@storybook/react'

['l', 'r']
  .forEach((modifier) => {
    storiesOf('floats', module)
      .add(
        `f${modifier}`, () => (
          <span className={`f${modifier}`}>
             f {modifier}
          </span>
        )
      )
  })
