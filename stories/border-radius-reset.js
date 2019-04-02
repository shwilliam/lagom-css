import React from 'react'
import { storiesOf } from '@storybook/react'

['t', 'b', 'l', 'r']
  .forEach((modifier) => {
    storiesOf('border radius reset', module)
      .add(
        `br${modifier}0`, () => (
          <span className={`ba br3 br${modifier}0`}>
            {`br${modifier}0`}
          </span>
        )
      )
  })
