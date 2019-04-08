import React from 'react'
import { storiesOf } from '@storybook/react'

[1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  .forEach((modifier) => {
    if (modifier.toString().length > 1) {
      storiesOf('max widths', module)
        .add(
          `mw${modifier}vw`, () => (
            <p
              style={{
                display: 'inline-block',
                width: '1000000px',
                overflowX: 'scroll',
                outline: '1px solid'
              }}
              className={`mw${modifier}vw`}
            >
                mw{modifier}vw
            </p>
          )
        )
    }
    storiesOf('max widths', module)
      .add(
        `mw${modifier}`, () => (
          <div style={{
            width: '100vw'
          }}>
            <p
              style={{
                display: 'inline-block',
                width: '4000px',
                outline: '1px solid'
              }}
              className={`mw${modifier}`}
            >
              mw{modifier}
            </p>
          </div>
        )
      )
  })
