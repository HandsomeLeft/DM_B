class Local_cache {
    set_cache(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    get_cache(key: string) {
        const value = window.localStorage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
    }
    delete_cache(key: string) {
        window.localStorage.removeItem(key)
    }
    clear_cache() {
        window.localStorage.clear()
    }
}
export default new Local_cache()
