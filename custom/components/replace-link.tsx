import { FC, ReactNode, useState } from 'react'

import { C } from 'core/components'
import ColoredText from 'custom/components/colored-text'
import colors from 'custom/components/utils/colors'
import { hasTriggeredOption } from 'custom/components/utils/inventory'
import useInventory from 'core/hooks/use-inventory'
import { Next, Tag } from 'core/types'

interface ReplaceLinkProps {
    revealOn: Tag[]
    hideOn?: Tag[]
    initialText: ReactNode
    linkText?: string
    finalText: string
    tag: Tag
    nextUnit?: Next
    discardColorsOn?: Tag[]
}

const ReplaceLink: FC<ReplaceLinkProps> = (props): JSX.Element => {
    const [isDiscarded, setIsDiscarded] = useState(false)
    const handleDiscard = () => setIsDiscarded(true)

    const tagValue = useInventory([props.tag])
    const choiceTriggered = hasTriggeredOption(tagValue)
    const revealOnTriggered = hasTriggeredOption(useInventory(props.revealOn))
    const hideOnTriggered = hasTriggeredOption(useInventory(props.hideOn))
    const discardColorsOnTriggered = hasTriggeredOption(useInventory(props.discardColorsOn))

    const finalTextIsChosen = choiceTriggered && tagValue[tagValue.length - 1] === props.finalText

    const linkTextToApply = props.linkText ? props.linkText : props.finalText

    const disableColorsOnFinalElement =
        isDiscarded ||
        discardColorsOnTriggered ||
        !props.linkText ||
        props.linkText === props.finalText ||
        props.initialText === props.finalText

    if (hideOnTriggered) {
        return null
    }

    const children = !choiceTriggered ? (
        <C
            options={[
                [linkTextToApply, null],
                ['', null]
            ]}
            tag={props.tag}
            last={props.finalText}
            next={props.nextUnit}
        />
    ) : (
        <span onClick={handleDiscard} onKeyPress={handleDiscard} tabIndex={0} role="button">
            <ColoredText backgroundColor={colors.teal} disableColors={disableColorsOnFinalElement}>
                {props.finalText}
            </ColoredText>
        </span>
    )

    return (
        <span>
            <ColoredText
                backgroundColor={colors.grey}
                disableColors={!revealOnTriggered}
                hideChildren={choiceTriggered}>
                {props.initialText}
            </ColoredText>
            <ColoredText
                backgroundColor={colors.teal}
                disableColors={finalTextIsChosen || disableColorsOnFinalElement}
                hideChildren={!revealOnTriggered}>
                {children}
            </ColoredText>
        </span>
    )
}

ReplaceLink.defaultProps = {
    hideOn: [],
    discardColorsOn: [],
    nextUnit: Next.None
}

export default ReplaceLink
