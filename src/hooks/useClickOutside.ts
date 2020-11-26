
import { onMounted, onUnmounted, Ref, ref } from "vue"

function useClickOutside(elementRef: Ref<null | HTMLElement>) {
    const isClickOutside = ref(false)

    const handleClickOutside = (e: MouseEvent) => {
        if (elementRef.value && elementRef.value.contains(e.target as HTMLElement)) {
            isClickOutside.value = false
        } else {
            isClickOutside.value = true
        }
    }

    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })

    return isClickOutside

}

export default useClickOutside