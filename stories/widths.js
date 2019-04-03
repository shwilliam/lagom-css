import React from 'react'
import { storiesOf } from '@storybook/react'

[0, 1, 2, 3, 4, 5, 6, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100]
  .forEach((modifier) => {
    if (modifier.toString().length > 1) {
      storiesOf('widths', module)
        .add(
          `w${modifier}`, () => (
            <div style={{
              display: 'inline-block',
              width: '200px',
              outline: '1px solid'
            }}>
              <span
                style={{
                  display: 'inline-block',
                  outline: '1px solid'
                }}
                className={`w${modifier}`}
              >
                w{modifier}
              </span>
            </div>
          )
        )
    } else {
      storiesOf('widths', module)
        .add(
          `w${modifier}`, () => (
            <span
              style={{
                display: 'inline-block',
                outline: '1px solid',
                overflow: 'hidden',
                minWidth: '1px'
              }}
              className={`w${modifier}`}
            >
              w{modifier}
            </span>
          )
        )
    }
  })
