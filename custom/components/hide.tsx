import useInventory from 'core/hooks/use-inventory'
import { Tag } from 'core/types'
import { hasTriggeredOption } from './utils/inventory'

export interface HidingChildrenProps {
    on?: Tag[]
    children: React.ReactNode
}

/**
 * TODO
 */
const Hide = (props: HidingChildrenProps): any => {
    const onValue = props.on ? props.on : []

    if (hasTriggeredOption(useInventory(onValue))) {
        return null
    } else {
        return props.children
    }
}

export default Hide
