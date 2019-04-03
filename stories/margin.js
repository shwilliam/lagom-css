import React from 'react'
import { storiesOf } from '@storybook/react'

['', 'top', 'right', 'bottom', 'left']
  .forEach((side) => {
    ['a', 0, 1, 2, 3, 4, 5, 6]
      .forEach((modifier) => {
        if (modifier === 'a') {
          if (!['right', 'left'].includes(side)) {} else {
            storiesOf('margin', module)
              .add(`m${side[0]}${modifier}`, () => (
                <div
                  style={{
                    border: '1px solid black',
                    width: '100px'
                  }}
                >
                  <div
                    className={`m${side[0]}${modifier}`}
                    style={{ width: 'max-content' }}
                  >
                    {`m${side[0]}${modifier}`}
                  </div>
                </div>
              ))
          }
        } else {
          storiesOf('margin', module)
            .add(`${
              side
                ? `${side} `
                : ''
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
                      side.length > 0
                        ? side[0]
                        : ''
                    }${modifier}`
                  }
                  style={{
                    display: 'inline-block'
                  }}
                >
                  {
                    `m${
                      side.length > 0
                        ? side[0]
                        : ''
                    }${modifier}`
                  }
                </span>
              </span>
            ))
        }
      })
  })
