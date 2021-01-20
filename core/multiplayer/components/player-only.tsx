// Render a block only if the current player matches the player name
import React from 'react'

import { Player } from 'core/types'
import { PlayerContext } from './multiplayer-init'

type Props = {
    player: Player
}
const PlayerOnly: React.FC<Props> = ({ player, children }) => {
    const { currentPlayer } = React.useContext(PlayerContext)
    return <>{player === currentPlayer ? <>{children}</> : null}</>
}

export default PlayerOnly
