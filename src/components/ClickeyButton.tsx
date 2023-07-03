import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
    name: 'ClickeyButton',

    props: {
        instructions: {
            type: String,
        },
        onClick: {
            type: Function as PropType<() => void>,
            default: () => void 0,
        },
    },

    setup(props) {
        return () => (
            <div class="flex flex-col">
                <h1 class="mb-6">{props.instructions}</h1>
                <button
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={props.onClick}
                >
                    click!
                </button>
            </div>
        );
    },
});
