import React from 'react'
import { storiesOf } from '@storybook/react'

[1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  .forEach((modifier) => {
    if (modifier.toString().length > 1) {
      storiesOf('max heights', module)
        .add(
          `mh${modifier}vh`, () => (
            <p
              style={{
                display: 'inline-block',
                maxWidth: '10px',
                height: '1000000px',
                outline: '1px solid'
              }}
              className={`mh${modifier}vh`}
            >
                mh{modifier}vh
            </p>
          )
        )
    }
    storiesOf('max heights', module)
      .add(
        `mh${modifier}`, () => (
          <div style={{
            height: '100vh'
          }}>
            <p
              style={{
                display: 'inline-block',
                maxWidth: '10px',
                height: '4000px',
                outline: '1px solid'
              }}
              className={`mh${modifier}`}
            >
              mh{modifier}
            </p>
          </div>
        )
      )
  })
