<template>
  <div class="login-panel">
    <h1>DM后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch="true">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login_account></login_account>
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login_phone></login_phone>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import login_account from './login-account.vue'
import login_phone from './login-phone.vue'
export default defineComponent({
  data() {
    return {}
  },
  components: {
    login_account,
    login_phone
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.demo-tabs {
  margin-bottom: 120px;
  width: 340px;
}
</style>
