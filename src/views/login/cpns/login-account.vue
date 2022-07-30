<template>
  <div>
    <el-form label-width="50px" :rules="rules" :model="account" ref="form_ref">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus/lib/components'
import local_cache from '@/utils/cache'

export default defineComponent({
  setup() {
    const account = reactive({
      name: local_cache.get_cache('name') ?? '',
      password: local_cache.get_cache('password') ?? ''
    })
    const rules = {
      name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { pattern: /^[a-z0-9]{5,10}$/, message: '用户名必须是5-10个字母或数字' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { pattern: /^[a-z0-9]{3,}$/, message: '密码必须是3位以上字母或数字' }
      ]
    }
    const login_action = (is_keep_password: boolean) => {
      // console.log('action')
      form_ref.value?.validate((valid) => {
        if (valid)
          if (is_keep_password) {
            local_cache.set_cache('name', account.name)
            local_cache.set_cache('password', account.password)
          } else {
            local_cache.delete_cache('name')
            local_cache.delete_cache('password')
          }
      })
    }
    const form_ref = ref<InstanceType<typeof ElForm>>()
    return {
      account,
      rules,
      login_action,
      form_ref
    }
  }
})
</script>

<style scoped></style>
