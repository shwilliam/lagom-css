import React from 'react'
import { storiesOf } from '@storybook/react'

['i', 'n', 'b', 'capitalize', 'lower', 'upper', 'upper-s', 'underline', 'strike', 'decoration-none']
  .forEach((style) => {
    storiesOf('font styles', module)
      .add(
        style, () => (
          <p className={`${style}`}>
            {style}
          </p>
        )
      )
  })
