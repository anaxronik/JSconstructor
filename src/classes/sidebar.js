import { block } from '../utils'
import { TextBlock, TitleBlock } from './blocks'

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.init()
    this.update = updateCallback
  }

  init() {
    this.$el.insertAdjacentHTML('beforeend', this.template)
    this.$el.addEventListener('submit', this.add.bind(this))
  }

  add(event) {
    event.preventDefault()
    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value

    let newBlock

    if (type === 'text') {
      newBlock = new TextBlock(value, { styles })
    } else if (type === 'title') {
      newBlock = new TitleBlock(value, { styles })
    }

    this.update(newBlock)

    event.target.value.value = ''
    event.target.styles.value = ''
  }

  get template() {
    return [block('text'), block('title')].join('<hr/>')
  }
}
