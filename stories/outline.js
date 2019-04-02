import React from 'react'
import { storiesOf } from '@storybook/react'

['outline', 'outline-hidden', 'outline-none']
  .forEach((outlineClass) => {
    storiesOf('outline', module)
      .add(
        outlineClass, () => (
          <span className={outlineClass}>
            {outlineClass}
          </span>
        )
      )
  })
