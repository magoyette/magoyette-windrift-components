import * as React from 'react'

import * as Chakra from '@chakra-ui/react'

export interface BoxProps {
    color?: string
    backgroundColor?: string
    title?: string
    titleColor?: string
    titleBackgroundColor?: string
    children: React.ReactNode
    isItalic?: boolean
}

/**
 * A Bulma box with italic text.
 */
const Box: React.FunctionComponent<BoxProps> = (props): any => {
    const titleColor = props.titleColor ? props.titleColor : props.color
    const titleBackgroundColor = props.titleBackgroundColor
        ? props.titleBackgroundColor
        : props.backgroundColor
    const fontStyle = props.isItalic ? 'italic' : 'normal'
    const title = props.title ? (
        <Chakra.Box
            borderRadius="6px 6px 0px 0px"
            color={titleColor}
            bg={titleBackgroundColor}
            p={'1.25rem'}>
            <strong>{props.title}</strong>
        </Chakra.Box>
    ) : null

    return (
        <Chakra.Box
            color={props.color}
            bg={props.backgroundColor}
            rounded="md"
            boxShadow="base"
            style={{ fontStyle: fontStyle, marginBottom: '1.5rem' }}>
            {title}
            <Chakra.Box p={'1.25rem'}>{props.children}</Chakra.Box>
        </Chakra.Box>
    )
}

Box.defaultProps = {
    color: '#242424',
    backgroundColor: 'white',
    isItalic: false
}

export default Box
