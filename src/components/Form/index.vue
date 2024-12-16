<script setup lang="ts">
import { useModal } from '~modal/composables/useModal.ts'

interface Props {
  id: string
  title: string
  submitType?: 'confirm' | 'alert'
  submitBtnName: string
}

const props = defineProps<Props>()

const modal = useModal()

function closeForm() {
  switch (props.submitType) {
    case 'confirm':
      const result = window.confirm('Закрыть форму ?')

      if (result) {
        setTimeout(() => {
          modal.close(props.id)
        }, 5000)
      }
      return

    case 'alert':
      window.alert('Форма закроется через 5 секунд!')

      setTimeout(() => {
        modal.close(props.id)
      }, 5000)
      return

    default:
      modal.close(props.id)
      return
  }

  const result = window.confirm('Закрыть форму ?')

  if (!result)
    return

  setTimeout(() => {
    modal.close('Form1')
  }, 5000)
}

console.log(props)
</script>

<template>
  <Modal :name="id" class="absolute inset-0 z-10 flex size-full justify-end bg-black/20 p-8">
    <section class="relative flex max-h-max min-h-[804px] w-[505px] flex-col gap-6 rounded-[8px] bg-white p-6">
      <button type="button" class="absolute right-6 top-6" @click="modal.close(id)">
        <div class="relative flex size-5">
          <span class="absolute top-[5px] h-0.5 w-full translate-y-1 rotate-45 bg-blue" />
          <span class="absolute bottom-[5px] h-0.5 w-full -translate-y-1 -rotate-45 bg-blue" />
        </div>
      </button>
      <header class="flex items-start gap-2 border-b border-b-grey-light pb-2">
        <img src="~/assets/icons/Edit.svg" alt="" class="mt-0.5 shrink-0">
        <div>
          <h3 class="text-h3 text-grey">
            {{ title }}
          </h3>
          <h4 class="text-h4 text-grey-medium">
            описание модалки
          </h4>
        </div>
      </header>
      <slot />
      <footer class="mt-auto">
        <Button class="rounded-[8px] border border-[#2962FF] text-blue" @click="closeForm()">
          {{ submitBtnName }}
        </Button>
      </footer>
    </section>
  </Modal>
</template>

<style scoped>

</style>
