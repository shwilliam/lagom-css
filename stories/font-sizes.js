import React from 'react'
import { storiesOf } from '@storybook/react'

[1, 2, 3, 4, 5, 6]
  .forEach((int) => {
    storiesOf('font size', module)
      .add(
        `f${int}`, () => (
          <p className={`sans f${int}`}>
            {`f${int}`}
          </p>
        )
      )
  })
