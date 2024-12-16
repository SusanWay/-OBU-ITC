<script setup lang="ts">

</script>

<template>
  <Form id="Form1" title="Модальное окно 1" submit-type="confirm" submit-btn-name="Confirm">
    <ul class="flex flex-col gap-4">
      <li>
        <p class="text-sm text-grey ">
          ИНН:
        </p>
        <p class="text-base">
          XX-XX-XXXXXX-XX
        </p>
      </li>
      <li>
        <p class="text-sm text-grey-medium ">
          Телефон:
        </p>
        <p class="text-base">
          +7 (XXX) XXX-XX-XX
        </p>
      </li>
      <li>
        <p class="text-sm text-grey-medium ">
          Электронная почта
        </p>
        <p class="text-base">
          example@example.ru
        </p>
      </li>
      <li>
        <p class="text-sm text-grey-medium ">
          Категория:
        </p>
        <p class="text-base">
          Социальный, производственный
        </p>
      </li>
      <li>
        <p class="text-sm text-grey-medium ">
          ОКВЭД:
        </p>
        <p class="text-base">
          Неизвестно какой длинны будет строка, поэтому тут  длинный комментарий. А вообще я хочу чаю и плюшку.
        </p>
      </li>
    </ul>
  </Form>
</template>

<style scoped>

</style>
