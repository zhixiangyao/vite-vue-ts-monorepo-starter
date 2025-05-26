<script lang="tsx">
import { defineComponent, onMounted, ref, renderSlot } from 'vue'

export default defineComponent({
  props: { msg: String },
  setup(props, ctx) {
    const { slots } = ctx
    const count = ref(0)
    const handleClick = () => count.value++

    onMounted(() => {
      console.log('mounted!')
    })

    return () => (
      <div>
        <h1>
          {props.msg}
        </h1>

        <button type="button" onClick={handleClick}>
          count is:
          {' '}
          {count.value}
        </button>

        {renderSlot(slots, 'default')}
      </div>
    )
  },
})
</script>
