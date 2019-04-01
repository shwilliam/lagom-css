import { configure } from '@storybook/react'
import 'loki/configure-react'
import '../dist/lagom.min.css'

function loadStories() {
  require('../stories/margin.js')
  require('../stories/padding.js')
}

configure(loadStories, module)
