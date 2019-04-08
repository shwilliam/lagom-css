import React from 'react'
import { storiesOf } from '@storybook/react'

['nowrap', 'pre', 'pre-line']
  .forEach((name) => {
    storiesOf('whitespace', module)
      .add(
        name, () => (
          <div style={{ width: '300px' }}>
            <p className={name}>
              {`
    ${name}
    Occaecat cillum deserunt excepteur occaecat.
    Officia fugiat deserunt cillum est nisi irure occaecat culpa commodo exercitation.
    Incididunt ipsum non mollit adipisicing nulla sit ullamco adipisicing dolore.
    Ea labore occaecat do consectetur sint anim ipsum irure ut eu laboris incididunt mollit.
    Id proident tempor aute culpa commodo do.
    `}
            </p>
          </div>
        )
      )
  })
