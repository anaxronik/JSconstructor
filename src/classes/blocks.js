import { col, css, row } from '../utils'

export class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Method ToHTML must be realized ')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { tag = 'h1', styles = '' } = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { imageStyles = '', alt = '', styles = '' } = this.options

    return row(
      `<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}"/>`,
      css(styles)
    )
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { styles = '' } = this.options

    return row(this.value.map(col).join(''), css(styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { styles = '' } = this.options

    return row(col(`<p>${this.value}</p>`), css(styles))
  }
}
