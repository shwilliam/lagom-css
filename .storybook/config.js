import { configure } from '@storybook/react'
import 'loki/configure-react'
import '../dist/lagom.min.css'

function loadStories() {
  require('../stories/text-colors.js')
}

configure(loadStories, module)
