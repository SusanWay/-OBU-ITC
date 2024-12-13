import { reactive } from 'vue'

const modalList: Record<string, boolean> = reactive({})

export function useModal() {

    const create = (name: string, state: boolean = false): void => {
        if (name in modalList) {
            console.warn(`name:${name} - уже занят`)
            return
        }
        modalList[name] = state
    }
    const open = (name: string): void => {
        if (name in modalList)
            modalList[name] = true
    }

    const close = (name: string): void => {
        if (name in modalList)
            modalList[name] = false
    }

    const isOpen = (name: string): boolean => {
        return name in modalList ? modalList[name] : false
    }

    return {
        create,
        open,
        close,
        isOpen
    }
}