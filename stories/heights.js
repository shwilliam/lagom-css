import React from 'react'
import { storiesOf } from '@storybook/react'

[0, 1, 2, 3, 4, 5, 6, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100]
  .forEach((modifier) => {
    if (modifier.toString().length > 1) {
      storiesOf('heights', module)
        .add(
          `h${modifier}`, () => (
            <div style={{
              display: 'inline-block',
              height: '200px',
              outline: '1px solid'
            }}>
              <span
                style={{
                  display: 'inline-block',
                  outline: '1px solid'
                }}
                className={`h${modifier}`}
              >
                h{modifier}
              </span>
            </div>
          )
        )
    } else {
      storiesOf('heights', module)
        .add(
          `h${modifier}`, () => (
            <span
              style={{
                display: 'inline-block',
                outline: '1px solid',
                overflow: 'hidden',
                minHeight: '1px'
              }}
              className={`h${modifier}`}
            >
              h{modifier}
            </span>
          )
        )
    }
  })
