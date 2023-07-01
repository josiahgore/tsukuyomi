import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ClickeyButton',

  props: {
    instructions: {
      type: String
    },
    onClick: {
      type: Function as PropType<() => void>,
      default: () => void 0
    }
  },

  setup(props) {
    return () => (
      <div class="home">
        <h1>{props.instructions}</h1>
        <button onClick={props.onClick}>click!</button>
      </div>
    )
  }
})
