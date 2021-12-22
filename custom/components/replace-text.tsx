import { FC, ReactNode, useState } from 'react'

import ColoredText from 'custom/components/colored-text'
import colors from 'custom/components/utils/colors'
import { hasTriggeredOption } from 'custom/components/utils/inventory'
import useInventory from 'core/hooks/use-inventory'
import { Tag } from 'core/types'

interface ReplaceTextProps {
    initialText: ReactNode
    finalText: ReactNode
    on: Tag[]
    discardColorsOn?: Tag[]
}

/**
 * Replace an initial text with a final text with a diff
 * effect that displays both the initial and final text
 * in different colors.
 *
 * The initial text and final text diff can be discarded
 * by clicking on the initial or final text, only the
 * final text will then be displayed.
 */
const ReplaceText: FC<ReplaceTextProps> = (props): JSX.Element => {
    const [isDiscarded, setIsDiscarded] = useState(false)
    const handleDiscard = () => setIsDiscarded(true)

    const triggered = hasTriggeredOption(useInventory(props.on))
    const discardColorsOnTriggered = hasTriggeredOption(useInventory(props.discardColorsOn))

    const discarded = isDiscarded || discardColorsOnTriggered

    return (
        <span onClick={handleDiscard} onKeyPress={handleDiscard} tabIndex={0} role="button">
            <ColoredText
                backgroundColor={colors.grey}
                disableColors={!triggered}
                hideChildren={discarded}>
                {props.initialText}
            </ColoredText>
            <ColoredText
                backgroundColor={colors.teal}
                disableColors={discarded}
                hideChildren={!triggered}>
                {props.finalText}
            </ColoredText>
        </span>
    )
}

ReplaceText.defaultProps = {
    discardColorsOn: []
}

export default ReplaceText
