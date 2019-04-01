import React from 'react'
import { storiesOf } from '@storybook/react'

['', 'top', 'right', 'bottom', 'left']
  .forEach((side) => {
    [0, 1, 2, 3, 4, 5, 6]
      .forEach((i) => {
        storiesOf('padding', module)
          .add(`${
            side
              ? `${side} `
              : ''
          }${i}`, () => (
            <span
              style={{
                border: '1px solid black',
                display: 'inline-block'
              }}
            >
              <span
                className={
                  `p${
                    side.length > 0
                      ? side[0]
                      : ''
                  }${i}`
                }
                style={{
                  display: 'inline-block'
                }}
              >
                {
                  `p${
                    side.length > 0
                      ? side[0]
                      : ''
                  }${i}`
                }
              </span>
            </span>
          ))
      })
  })
