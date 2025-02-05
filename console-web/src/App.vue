
<script setup>
import { computed } from 'vue';
import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
import useLocale from '@/hooks/locale';
import { useI18n } from 'vue-i18n'
import notification from '@/utils/notification'

const { t } = useI18n()

notification.initI18nT(t)

const { currentLocale } = useLocale();

const locale = computed(() => {
  switch (currentLocale.value) {
    case 'zh-CN':
      return zhCN;
    case 'en-US':
      return enUS;
    default:
      return zhCN;
  }
});
</script>

<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
