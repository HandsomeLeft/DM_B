import { createStore } from 'vuex'
import login from './login/login'

interface I_roote_state {
  name: string
  age: number
}

const store = createStore<I_roote_state>({
  state: () => {
    return {
      name: 'ceaser',
      age: 21
    }
  },
  modules: {
    login
  }
})

export default store
