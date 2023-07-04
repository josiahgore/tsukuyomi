import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { Button } from 'flowbite-vue';

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
                <Button size="xl" pill={true} gradient="pink-orange" onClick={props.onClick}>
                    click!
                </Button>
            </div>
        );
    },
});
