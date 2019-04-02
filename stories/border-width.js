import React from 'react'
import { storiesOf } from '@storybook/react'

[1, 2, 3, 4, 5, 6]
  .forEach((width) => {
    storiesOf('border width', module)
      .add(
        `bw${width}`, () => (
          <span
            style={{ display: 'inline-block' }}
            className={`ba bw${width}`}
          >
            {`bw${width}`}
          </span>
        )
      )
  })
