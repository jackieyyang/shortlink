<script setup>
import {defineProps} from 'vue';
import useLocale from "@/hooks/locale";

const props = defineProps({
  size: {
    type: Number,
    default: 24,
  },
});

const i18n = useLocale();

const switchLocale = (newLocale) => {
  i18n.changeLocale(newLocale);
};
</script>

<template>
  <a-dropdown trigger="hover">
    <icon-language :size="props.size" class="!cursor-pointer"/>
    <template #content>
      <a-doption @click="switchLocale('en-US')">English</a-doption>
      <a-doption @click="switchLocale('zh-CN')">简体中文</a-doption>
    </template>
  </a-dropdown>
</template>
