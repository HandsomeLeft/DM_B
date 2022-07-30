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
        <login_account ref="account_ref"></login_account>
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
    <div class="account-control">
      <el-checkbox v-model="is_keep_password">记住密码</el-checkbox>
      <el-link type="=primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="login_btn"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
    const account_ref = ref()
    const is_keep_password = ref(true)
    const login_btn = () => {
      console.log('denglu')
      account_ref.value?.login_action()
    }
    return {
      is_keep_password,
      login_btn,
      account_ref
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 120px;
  width: 340px;
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.login-btn {
  margin-top: 10px;
  width: 100%;
}
</style>
