import { storiesOf } from '@storybook/vue'

import GdbCard from './index.vue'

storiesOf('GdbCard', module)
  .addParameters({
    backgrounds: [
      { name: 'twitter', value: '#333333', default: true }
    ],
  })
  .addDecorator(() => ({
    template: `
      <div style="width: 25%;">
        <story/>
      </div>
    `
  }))
  .add('with image, name and rating', () => ({
    components: { GdbCard },
    template: '<gdb-card :game="game" />',
    data() {
      return {
        game: {
          id: "CA",
          name: "Super Smash Bros. Ultimate",
          rating: 100,
          cover_path: 'https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg'
        }
      }
    }
  }))
  .add('with image and name', () => ({
    components: { GdbCard },
    template: '<gdb-card :game="game" />',
    data() {
      return {
        game: {
          id: "CA",
          name: "Super Smash Bros. Ultimate",
          cover_path: 'https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg'
        }
      }
    }
  }))
