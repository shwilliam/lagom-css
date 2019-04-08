import React from 'react'
import { storiesOf } from '@storybook/react'

['l', 'r', 'c', 'j']
  .forEach((modifier) => {
    storiesOf('text-align', module)
      .add(
        `t${modifier}`, () => (
          <div style={{ textAlign: modifier === 'r' ? 'left' : 'right' }}>
            <p className={`t${modifier}`} style={{ width: '150px' }}>
              {
                modifier !== 'j' ? `t${modifier}` : `t${modifier}
                "Id culpa adipisicing eu exercitation aliquip irure eiusmod Lorem consequat tempor voluptate est."
                `
              }
            </p>
          </div>
        )
      )
  })
