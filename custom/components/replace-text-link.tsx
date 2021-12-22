import { FC, useState } from 'react'

import { C } from 'core/components'
import ColoredText from 'custom/components/colored-text'
import colors from 'custom/components/utils/colors'
import { hasTriggeredOption } from 'custom/components/utils/inventory'
import useInventory from 'core/hooks/use-inventory'
import { Next, Tag } from 'core/types'

interface ReplaceTextLinkProps {
    initialText: string
    linkText?: string
    finalText: string
    tag: Tag
    nextUnit?: Next
}

const ReplaceTextLink: FC<ReplaceTextLinkProps> = (props): JSX.Element => {
    const [isDiscarded, setIsDiscarded] = useState(false)
    const handleDiscard = () => setIsDiscarded(true)

    const discarded = isDiscarded || props.linkText === props.finalText
    const tagValue = useInventory([props.tag])
    const tagIsSet = hasTriggeredOption(tagValue)

    const linkTextIsNullOrEqualToFinalText = !props.linkText || props.linkText === props.finalText
    const linkTextToApply = linkTextIsNullOrEqualToFinalText ? props.finalText : props.linkText

    const displayOnlyFinalText =
        tagIsSet &&
        (tagValue[tagValue.length - 1] === props.finalText ||
            (props.linkText && tagValue[tagValue.length - 1] === props.linkText))

    if (displayOnlyFinalText) {
        return (
            <span onClick={handleDiscard} onKeyPress={handleDiscard} tabIndex={0} role="button">
                <ColoredText
                    backgroundColor={colors.teal}
                    disableColors={discarded || linkTextIsNullOrEqualToFinalText}>
                    {props.finalText}
                </ColoredText>
            </span>
        )
    } else {
        return (
            <span>
                <ColoredText backgroundColor={colors.grey} hideChildren={!tagIsSet}>
                    {props.initialText}
                </ColoredText>
                <ColoredText backgroundColor={colors.teal} disableColors={!tagIsSet}>
                    <C
                        options={[
                            [props.initialText, null],
                            [linkTextToApply, null]
                        ]}
                        tag={props.tag}
                        next={props.nextUnit}
                        last={props.finalText}
                    />
                </ColoredText>
            </span>
        )
    }
}

ReplaceTextLink.defaultProps = {
    nextUnit: Next.None
}

export default ReplaceTextLink
