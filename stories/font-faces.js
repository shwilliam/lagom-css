import React from 'react'
import { storiesOf } from '@storybook/react'

['sans', 'system-sans', 'serif', 'system-serif', 'code', 'system-code']
  .forEach((fontFace) => {
    storiesOf('font face', module)
      .add(
        fontFace, () => (
          <p className={`${fontFace}`}>
            {`${fontFace}`}
          </p>
        )
      )
  })
