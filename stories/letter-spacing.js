import React from 'react'
import { storiesOf } from '@storybook/react'

[0, 1, 2, 3, 4, 5, 6]
  .forEach((modifier) => {
    storiesOf('letter spacing', module)
      .add(
        `ls${modifier}`, () => (
          <p className={`ls${modifier}`}>
            {`ls${modifier}`}
          </p>
        )
      )
  })
