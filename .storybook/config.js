import { configure } from '@storybook/react'
import 'loki/configure-react'
import '../dist/lagom.min.css'

function loadStories() {
  require('../stories/font-faces.js')
  require('../stories/font-sizes.js')
  require('../stories/margin.js')
  require('../stories/padding.js')
  require('../stories/outline.js')
  require('../stories/borders.js')
  require('../stories/border-radius.js')
  require('../stories/border-radius-reset.js')
  require('../stories/border-style.js')
  require('../stories/border-width.js')
  require('../stories/border-side-reset.js')
}

configure(loadStories, module)
