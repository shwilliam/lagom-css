import React from 'react'
import { storiesOf } from '@storybook/react'

[0, 'a', 't', 'r', 'b', 'l']
  .forEach((modifier) => {
    storiesOf('borders', module)
      .add(
        `b${modifier}`, () => (
          <span className={`b0 b${modifier}`}>
            {`b${modifier}`}
          </span>
        )
      )
  })
