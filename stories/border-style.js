import React from 'react'
import { storiesOf } from '@storybook/react'

['dotted', 'dashed', 'solid']
  .forEach((style) => {
    storiesOf('border style', module)
      .add(
        style, () => (
          <span className={`ba ${style}`}>
            {style}
          </span>
        )
      )
  })
