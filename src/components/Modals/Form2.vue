<script setup lang="ts">
const dataList = [
  {
    date: 'Четверг, 1 Октября',
    time: '12:00 - 13:00',
    text: 'История интерьера: русский стиль и космополитизм»: Открытые лекции в июне в Школе дизайна НИУ ВШЭ',
  },
  {
    date: 'Четверг, 1 Октября',
    time: '12:00 - 13:00',
    text: 'История интерьера: русский стиль и космополитизм»: Открытые лекции в июне в Школе дизайна НИУ ВШЭ',
  },
  {
    date: 'Четверг, 1 Октября',
    time: '12:00 - 13:00',
    text: 'История интерьера: русский стиль и космополитизм»: Открытые лекции в июне в Школе дизайна НИУ ВШЭ',
  },
  {
    date: 'Четверг, 1 Октября',
    time: '12:00 - 13:00',
    text: 'История интерьера: русский стиль и космополитизм»: Открытые лекции в июне в Школе дизайна НИУ ВШЭ',
  },
]
</script>

<template>
  <Form id="Form2" title="Модальное окно 2" submit-type="alert" submit-btn-name="Alert">
    <ul class="flex flex-col gap-4">
      <li v-for="item in dataList" class="rounded-[8px] p-6 shadow">
        <p class="text-sm text-grey">
          {{ item.date }} · {{ item.time }}
        </p>
        <p class="mt-2 border-b border-b-grey-light pb-2 text-[15px] leading-[19px] text-grey">
          {{ item.text }}
        </p>
      </li>
    </ul>
  </Form>
</template>

<style scoped>

</style>