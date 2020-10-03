import image from './assets/image.png'
import {
  Block,
  ColumnsBlock,
  ImageBlock,
  TextBlock,
  TitleBlock,
} from './classes/blocks'

export const model = [
  new TitleBlock('Конструктор сайтов на чистом Java Script', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099,  #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),
  new ImageBlock(image, {
    alt: 'this image',
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
  }),
  new ColumnsBlock(
    [
      'Приложение на чистом Java Script',
      'Узнаешь как работают принципы SOLID и ООП в Java Script за один курс',
      'JavaScript - это просто, интересно. Научись создавать люые UI своими руками',
    ],
    {
      styles: {
        background: 'linear-gradient(to right, #ff0099,  #493240)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),
  new TextBlock(
    'Laboris qui labore deserunt consectetur non ullamco enim eiusmod dolor cillum et consectetur fugiat reprehenderit. Deserunt ipsum voluptate eiusmod officia eu irure minim consequat labore exercitation ad eiusmod cupidatat laboris. Quis incididunt officia dolore cupidatat in minim.',
    {
      styles: {
        background: 'linear-gradient(to right, #f2994a,  #f2c94c)',
        'font-weight': 'bold',
        padding: '1rem',
      },
    }
  ),
]
