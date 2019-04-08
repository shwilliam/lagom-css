import React from 'react'
import { storiesOf } from '@storybook/react'

['all', 'top', 'right', 'bottom', 'left']
  .forEach((side) => {
    [0, 1, 2, 3, 4, 5, 6]
      .forEach((i) => {
        if (side === 'all') {
          storiesOf('padding', module)
            .add(`p${i}`, () => (
              <span
                style={{
                  border: '1px solid black',
                  display: 'inline-block'
                }}
              >
                <span
                  className={
                    `p${i}`
                  }
                  style={{
                    display: 'inline-block'
                  }}
                >
                  {
                    `p${i}`
                  }
                </span>
              </span>
            ))
        } else {
          storiesOf('padding', module)
            .add(`p${
              side[0]
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
                      side[0]
                    }${i}`
                  }
                  style={{
                    display: 'inline-block'
                  }}
                >
                  {
                    `p${
                      side[0]
                    }${i}`
                  }
                </span>
              </span>
            ))
        }
      })
  })
