import * as React from 'react'
import { useSelector } from 'react-redux'
import { PusherProvider } from '@harelpls/use-pusher'

import { RootState } from 'core/reducers'
import MultiplayerInit from 'core/multiplayer/components/multiplayer-init'

type Props = {
    ready: React.ReactNode
    setup: React.ReactNode
}
const TitleScreen: React.FC<Props> = ({ ready, setup }) => {
    const multiplayer = useSelector((state: RootState) => state.multiplayer)
    return (
        <>
            {multiplayer.ready ? (
                <PusherProvider
                    clientKey={multiplayer.clientKey}
                    cluster={multiplayer.cluster}
                    authEndpoint={multiplayer.authEndpoint}>
                    <MultiplayerInit>{ready}</MultiplayerInit>
                </PusherProvider>
            ) : (
                <>{setup}</>
            )}
        </>
    )
}

export default TitleScreen