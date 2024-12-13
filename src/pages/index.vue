<script setup lang="ts">
import { useModal } from '~modal/composables/useModal.ts'

const modal = useModal()
</script>

<template>
  <div class="flex size-full h-screen items-center justify-center">
    <div class="flex gap-5 rounded-2xl bg-white px-6 py-4 text-black">
      <Button class="rounded-xl border border-black" @click="modal.open('Form1')">
        Форма 1
      </Button>
      <Button class="rounded-xl border border-black" @click="modal.open('Form2')">
        Форма 2
      </Button>
    </div>
  </div>
</template>

<style scoped>

</style>
