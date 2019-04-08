import React from 'react'
import { storiesOf } from '@storybook/react'

[1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  .forEach((modifier) => {
    if (modifier.toString().length > 1) {
      storiesOf('min widths', module)
        .add(
          `minw${modifier}vw`, () => (
            <span
              style={{
                display: 'inline-block',
                width: '1px',
                overflow: 'visible',
                outline: '1px solid'
              }}
              className={`minw${modifier}vw`}
            >
                minw{modifier}vw
            </span>
          )
        )
    }
    storiesOf('min widths', module)
      .add(
        `minw${modifier}`, () => (
          <div style={{
            width: '100vw'
          }}>
            <span
              style={{
                display: 'inline-block',
                outline: '1px solid'
              }}
              className={`minw${modifier}`}
            >
              minw{modifier}
            </span>
          </div>
        )
      )
  })
