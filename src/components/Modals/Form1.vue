<script setup lang="ts">
import { useModal } from '~modal/composables/useModal.ts'

const modal = useModal()

function closeForm() {
  const result = window.confirm('Закрыть форму ?')

  if (!result)
    return

  setTimeout(() => {
    modal.close('Form1')
  }, 5000)
}
</script>

<template>
  <Modal name="Form1" class="absolute inset-0 z-10 flex size-full items-center justify-center bg-black/20">
    <div class="relative flex w-[600px] flex-col gap-5 rounded-2xl bg-white px-6 py-9">
      <button type="button" class="absolute right-6 top-6" @click="modal.close('Form1')">
        <div class="relative flex size-6">
          <span class="absolute top-[7px] h-0.5 w-full translate-y-1 rotate-45 bg-black" />
          <span class="absolute bottom-[7px] h-0.5 w-full -translate-y-1 -rotate-45 bg-black" />
        </div>
      </button>
      <h1 class="text-[24px]">
        Форма 1
      </h1>
      <img src="https://i.giphy.com/yYSSBtDgbbRzq.webp" class="w-full select-none" alt="">
      <Button class="mx-auto w-2/3 rounded-xl border border-black" @click="closeForm()">
        Confirm
      </Button>
    </div>
  </Modal>
</template>

<style scoped>

</style>
