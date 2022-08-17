<template>
    <div class="login">
        <login_panel></login_panel>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import login_panel from './cpns/login-panel.vue'

export default defineComponent({
    components: {
        login_panel
    },
    setup() {
        return {}
    }
})
</script>

<style scoped lang="less">
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>
