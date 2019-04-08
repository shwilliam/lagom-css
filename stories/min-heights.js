import React from 'react'
import { storiesOf } from '@storybook/react'

[1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  .forEach((modifier) => {
    if (modifier.toString().length > 1) {
      storiesOf('min heights', module)
        .add(
          `minh${modifier}vh`, () => (
            <span
              style={{
                display: 'inline-block',
                height: '1px',
                overflow: 'visible',
                outline: '1px solid'
              }}
              className={`minh${modifier}vh`}
            >
                minh{modifier}vh
            </span>
          )
        )
    }
    storiesOf('min heights', module)
      .add(
        `minh${modifier}`, () => (
          <div style={{
            height: '100vh'
          }}>
            <span
              style={{
                display: 'inline-block',
                outline: '1px solid'
              }}
              className={`minh${modifier}`}
            >
              minh{modifier}
            </span>
          </div>
        )
      )
  })
