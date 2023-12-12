<template>
    <svg :class="svgClass" aria-hidden="true" class="svg-external-icon svg-icon">
        <use class="svg-use" :href="symbolId" />
    </svg>
</template>
  
<script >
import { defineComponent, computed } from 'vue'

export default defineComponent({
    name: 'SvgIcon',
    props: {
        prefix: {
            type: String,
            default: 'icon'
        },
        name: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const symbolId = computed(() => `#icon-${props.name}`)
        const svgClass = computed(() => {
            if (props.className) {
                return `svg-icon ${props.className}`
            }
            return 'svg-icon'
        })
        return { symbolId, svgClass }
    }
})
</script>
<style scope>
.svg-icon {
    width: 18px;
    height: 18px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.svg-external-icon {
    mask-size: cover !important;
    display: inline-block;
}
</style>