<script lang="ts" setup>
import navigation from '@/utils/navigation';
import { reactive } from 'vue'

const userInfo = reactive({
  username: '',
  password: '',
  confirmPassword: '',
})

const handleSubmit = () => {
  console.log('submit')
}

const handleLoginSelect = () => {
  navigation.push('/user/login')
}
</script>

<template>
  <div class="register-form-wrapper">
    <div class="register-form-title">{{ $t('register.form.title') }}</div>
    <div class="register-form-sub-title">{{ $t('register.form.title') }}</div>
    <a-form
      ref="registerForm"
      :model="userInfo"
      class="register-form"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="username"
        :rules="[{ required: true, message: $t('register.form.userName.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input v-model="userInfo.username" :placeholder="$t('register.form.userName.placeholder')">
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="password"
        :rules="[{ required: true, message: $t('register.form.password.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="userInfo.password"
          :placeholder="$t('register.form.password.placeholder')"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item
        field="confirmPassword"
        :rules="[{ required: true, message: $t('register.form.confirmPassword.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="userInfo.confirmPassword"
          :placeholder="$t('register.form.confirmPassword.placeholder')"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-space :size="16" direction="vertical">
        <a-button type="primary" html-type="submit" long>
          {{ $t('register.form.register') }}
        </a-button>
        <a-button type="text" long class="register-form-register-btn" @click="handleLoginSelect">
          {{ $t('register.form.login') }}
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<style scoped>
.register-form-wrapper {
  width: 320px;
}

.register-form-title {
  color: var(--color-text-1);
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}

.register-form-sub-title {
  color: var(--color-text-3);
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
}

.register-form-register-btn {
  color: var(--color-text-3) !important;
}
</style>
