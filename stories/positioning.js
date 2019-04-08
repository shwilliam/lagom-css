import React from 'react'
import { storiesOf } from '@storybook/react'

['relative', 'absolute', 'fixed', 'static', 1, 2, 3, 4, 5, 6]
  .forEach(modifier => {
    if (typeof modifier === 'number') {
      ['top', 'right', 'bottom', 'left'].forEach(side => {
        storiesOf('positioning', module)
          .add(
            `${side}${modifier}`, () => (
              <div style={{ height: '200px', outline: '1px solid', position: 'relative' }}>
                <span
                  className={`${side}${modifier}`}
                  style={{ position: 'absolute' }}
                >
                  {`${side}${modifier}`}
                </span>
              </div>
            )
          )
      })
    } else {
      storiesOf('positioning', module)
        .add(
          modifier, () => (
            <div style={{ height: '200px', marginTop: '20px', outline: '1px solid' }}>
              <span className={modifier} style={{ top: '40px' }}>
                {modifier}
              </span>
            </div>
          )
        )
    }
  })
