<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="fold_change()"><Operation /></el-icon>
    <div class="content">
      <div>面包屑</div>
      <user_info></user_info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import user_info from './user_info.vue'

export default defineComponent({
  emits: ['fold_change'],
  components: {
    user_info
  },
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
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 35px;
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
    color: #fff;
  }
}
</style>
