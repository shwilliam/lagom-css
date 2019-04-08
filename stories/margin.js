import React from 'react'
import { storiesOf } from '@storybook/react'

['all', 'top', 'right', 'bottom', 'left']
  .forEach((side) => {
    [0, 1, 2, 3, 4, 5, 6]
      .forEach((modifier) => {
        if (side === 'all') {
          storiesOf('margin', module)
            .add(`m${modifier}`, () => (
              <span
                style={{
                  border: '1px solid black',
                  display: 'inline-block'
                }}
              >
                <span
                  className={
                    `m${modifier}`
                  }
                  style={{
                    display: 'inline-block'
                  }}
                >
                  {
                    `m${modifier}`
                  }
                </span>
              </span>
            ))
        } else {
          storiesOf('margin', module)
            .add(`m${
              side[0]
            }${modifier}`, () => (
              <span
                style={{
                  border: '1px solid black',
                  display: 'inline-block'
                }}
              >
                <span
                  className={
                    `m${
                      side[0]
                    }${modifier}`
                  }
                  style={{
                    display: 'inline-block'
                  }}
                >
                  {
                    `m${
                      side[0]
                    }${modifier}`
                  }
                </span>
              </span>
            ))
        }
      })
  })
