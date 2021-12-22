import useInventory from 'core/hooks/use-inventory'
import { Tag } from 'core/types'
import { hasTriggeredOption } from './utils/inventory'

export interface RevealChildrenProps {
    on?: Tag[]
    children: React.ReactNode
}

/**
 * TODO
 */
const Reveal = (props: RevealChildrenProps): any => {
    const onValue = props.on ? props.on : []

    if (hasTriggeredOption(useInventory(onValue))) {
        return props.children
    } else {
        return null
    }
}

export default Reveal
