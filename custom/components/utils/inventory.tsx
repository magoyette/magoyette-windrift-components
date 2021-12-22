import { Option } from 'core/types'

export function hasTriggeredOption(options: Option[]): boolean {
    return options.some(function (option) {
        return option !== null && option !== undefined
    })
}
