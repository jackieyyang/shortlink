<script lang="ts" setup>
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="content-inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    height: 100vh;
    max-width: 100vw;
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }
</style>
