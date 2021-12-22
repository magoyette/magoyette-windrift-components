import * as React from 'react'
import { CSSProperties } from 'react'
import colors from './utils/colors'

export interface ColoredTextProps {
    backgroundColor?: string
    children: React.ReactNode
    disableColors?: boolean
    hideChildren?: boolean
}

/**
 * Apply a round colored background on the children,
 * usually a string of text or a Windrift List.
 */
const ColoredText: React.FunctionComponent<ColoredTextProps> = (props): any => {
    const style: CSSProperties = {
        cursor: props.disableColors ? 'auto' : 'pointer',
        color: colors.white,
        backgroundColor: props.backgroundColor,
        borderRadius: '0.2em',
        padding: '0.1em 0.2em',
        margin: '1px 0px',
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone'
    }

    const coloredText = (
        <span
            className={props.disableColors ? '' : 'coloredText'}
            style={props.disableColors ? {} : style}>
            {props.children}
        </span>
    )

    return props.hideChildren ? null : coloredText
}

ColoredText.defaultProps = {
    backgroundColor: colors.teal
}

export default ColoredText
