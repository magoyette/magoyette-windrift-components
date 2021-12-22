import * as React from 'react'

import { Next, NextType, Tag } from 'core/types'
import { C } from 'core/components'
import Hide from 'custom/components/hide'

export interface LinkProps {
    text: string
    tag: string
    next?: NextType
    hideOn?: Tag[]
}

/**
 * TODO
 */
const Link: React.FunctionComponent<LinkProps> = (props): any => {
    return (
        <Hide on={props.hideOn}>
            <C options={[[props.text], [props.text]]} tag={props.tag} next={props.next} />
        </Hide>
    )
}

Link.defaultProps = {
    next: Next.None
}

export default Link
