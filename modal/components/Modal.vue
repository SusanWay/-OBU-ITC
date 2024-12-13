<script setup lang="ts">
import { useModal } from '~/composables/useModal'

interface Props {
  name: string
  state?: boolean
}

const props = defineProps<Props>()

const modal = useModal()

onMounted(() => {
  modal.create(props.name, props?.state)
})
</script>

<template>
  <div v-if="modal.isOpen(props.name)" @click.self="modal.close(props.name)" >
    <slot/>
  </div>
</template>

<style scoped>

</style>