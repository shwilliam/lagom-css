import { configure } from '@storybook/react'
import '../dist/lagom.min.css'

function loadStories() {
  require('../stories/text-colors.js')
}

configure(loadStories, module)
