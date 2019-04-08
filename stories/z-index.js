import React from 'react'
import { storiesOf } from '@storybook/react'

[0, 1, 2, 3, 4, 5, 6]
  .forEach((modifier) => {
    storiesOf('z-index', module)
      .add(
        `z${modifier}`, () => (<>
          <span
            className={`z${modifier}`}
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              position: 'relative',
              width: '80px',
              height: '80px',
              outline: '1px solid',
              top: '30px',
              left: '80px',
              textAlign: 'center'
            }}
          >
            {`z${modifier}`}
          </span>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              outline: '1px solid',
              width: '80px',
              height: '80px',
              position: 'relative',
              left: '-60px',
              textAlign: 'center'
            }}
          >
              not set
          </span>
          <span
            style={{
              zIndex: 2147483647,
              backgroundColor: 'white',
              display: 'inline-block',
              position: 'relative',
              width: '80px',
              height: '80px',
              outline: '1px solid',
              top: '60px',
              left: '-140px',
              textAlign: 'center'
            }}
          >
            max
          </span>
          {
            modifier - 1 > 0
              ? <span
                style={{
                  zIndex: modifier + 1,
                  backgroundColor: 'white',
                  display: 'inline-block',
                  position: 'relative',
                  width: '80px',
                  height: '80px',
                  outline: '1px solid',
                  left: '-100px',
                  top: '60px',
                  textAlign: 'center'
                }}
              >
                z-index {modifier + 1}
              </span>
              : <span
                style={{
                  zIndex: modifier + 1,
                  backgroundColor: 'white',
                  display: 'inline-block',
                  position: 'relative',
                  width: '80px',
                  height: '80px',
                  outline: '1px solid',
                  left: '-100px',
                  top: '60px',
                  textAlign: 'center'
                }}
              >
                z-index {modifier + 1}
              </span>
          }
          {
            modifier - 1 > 0 &&
            <span
              style={{
                zIndex: modifier - 1,
                backgroundColor: 'white',
                display: 'inline-block',
                position: 'relative',
                width: '80px',
                height: '80px',
                outline: '1px solid',
                left: '-180px',
                textAlign: 'center'
              }}
            >
              z-index {modifier - 1}
            </span>
          }
        </>)
      )
  })
