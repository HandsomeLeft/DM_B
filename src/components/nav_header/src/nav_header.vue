<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="fold_change()"><Operation /></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['fold_change'],
  setup(props, { emit }) {
    const is_fold = ref(false)
    const fold_change = () => {
      is_fold.value = !is_fold.value
      emit('fold_change', is_fold.value)
    }
    return {
      is_fold,
      fold_change
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 35px;
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>
