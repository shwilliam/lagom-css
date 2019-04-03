import React from 'react'
import { storiesOf } from '@storybook/react'

[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  .forEach((percentage) => {
    if (percentage === 0) {
      storiesOf('opacity', module)
        .add(
          `o${percentage}`, () => (<>
          <span>
            {/* avoid entirely empty visual test */}
            &#8594;
          </span>
          <span className={`o${percentage}`}>
            {`o${percentage}`}
          </span>
        </>)
        )
    } else {
      storiesOf('opacity', module)
        .add(
          `o${percentage}`, () => (
            <span className={`o${percentage}`}>
              {`o${percentage}`}
            </span>
          )
        )
    }
  })
