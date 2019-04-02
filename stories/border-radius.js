import React from 'react'
import { storiesOf } from '@storybook/react'

[1, 2, 3, 4, 5, 6, 100, 'pill']
  .forEach((modifier) => {
    if (modifier === 'pill') {
      storiesOf('border radius', module)
        .add(
          modifier, () => (
            <span className={`ba ${modifier}`}>
              {modifier}
            </span>
          )
        )
    } else {
      storiesOf('border radius', module)
        .add(
          `br${modifier}`, () => (
            <span className={`ba br${modifier}`}>
              {`br${modifier}`}
            </span>
          )
        )
    }
  })
