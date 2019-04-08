import React from 'react'
import { storiesOf } from '@storybook/react'

[1, 2, 3, 4, 5, 6]
  .forEach((modifier) => {
    storiesOf('line heights', module)
      .add(
        `lh${modifier}`, () => (
          <span
            style={{
              display: 'inline-block',
              outline: '1px solid'
            }}
            className={`lh${modifier}`}
          >
            {`lh${modifier}`}
          </span>
        )
      )
  })
