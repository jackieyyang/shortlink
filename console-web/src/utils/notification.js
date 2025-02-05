import { Message } from '@arco-design/web-vue';

let t = null;

export const initI18nT = (i18nT) => {
  t = i18nT;
};

export const functionNotOpen = () => {
    Message.error(t('notification.function.fail'));
};

export default {
  initI18nT,
  functionNotOpen
};
