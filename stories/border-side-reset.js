import React from 'react'
import { storiesOf } from '@storybook/react'

['t', 'b', 'l', 'r']
  .forEach((modifier) => {
    storiesOf('border side reset', module)
      .add(
        `b${modifier}0`, () => (
          <span className={`ba b${modifier}0`}>
            {`b${modifier}0`}
          </span>
        )
      )
  })
