import { configure } from '@storybook/react'
import 'loki/configure-react'
import '../dist/lagom.min.css'

function loadStories() {
  require('../stories/font-faces.js')
  require('../stories/font-sizes.js')
  require('../stories/font-styles.js')
  require('../stories/line-heights.js')
  require('../stories/letter-spacing.js')
  require('../stories/margin.js')
  require('../stories/padding.js')
  require('../stories/outline.js')
  require('../stories/borders.js')
  require('../stories/border-radius.js')
  require('../stories/border-radius-reset.js')
  require('../stories/border-style.js')
  require('../stories/border-width.js')
  require('../stories/border-side-reset.js')
  require('../stories/opacity.js')
  require('../stories/input-resets.js')
  require('../stories/widths.js')
  require('../stories/heights.js')
  require('../stories/display.js')
}

configure(loadStories, module)
