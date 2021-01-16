import * as React from "react"
import { useSelector, useDispatch } from 'react-redux'

import { useChannel, useEvent } from "@harelpls/use-pusher"

import { RootState } from 'core/reducers'
import { resetGame } from 'core/util'
import { pickChoice, updateInventory } from "core/actions"
import { Tag } from "core/types"
import { logAction } from "core/actions/log"

import styles from 'public/stories/tic-tac-toe/styles/Content.module.scss'
import Presence from './components/presence'
import Log from "./components/log"
import { useContext } from "react"
import { StoryContext } from "pages/[story]"
import ShareButton from "core/components/multiplayer/share-button"


interface IndexProps {
    children: React.ReactNode
}
interface ApiChoice {
    tag: Tag
    choice: string
    player: string
    timestamp: string
}
const Content = ({ children }: IndexProps): JSX.Element => {
    const config = useSelector((state: RootState) => state.config)
    const multiplayer = useSelector((state: RootState) =>
        state.multiplayer)
    const { channelName } = multiplayer
    const currentPlayer = multiplayer.player
    const otherPlayer = currentPlayer === 1 ? 2 : 1

    const dispatch = useDispatch()
    const channel = useChannel(channelName)
    useEvent(channel, "choose", ({ tag, choice, player, timestamp }: ApiChoice) => {
        // Dispatch events from other player
        const eventPlayer = parseInt(player)
        const eventTimestamp = new Date(timestamp)
        if (currentPlayer !== eventPlayer) {
            dispatch(updateInventory(tag, choice))
            dispatch(pickChoice(tag, [[choice]], 0, eventPlayer))
            dispatch(logAction(tag, choice, eventTimestamp, eventPlayer))
        }
    })

    const persistor = useContext(StoryContext)

    return (
        <><header className={styles.header}>
            <nav>
                <h1>
                    {config.title}
                </h1>
                {
                    currentPlayer && <>
                        <div className={styles.player}>
                            You are player {currentPlayer} ⟶
                    </div>
                        <div className={styles.share}>
                            <ShareButton multiplayer={multiplayer} otherPlayer={otherPlayer}/>
                        </div>
                        <div className={styles.controls}>
                            <button onClick={() => {
                                resetGame(true, persistor)
                            }}>Reset</button>
                        </div>
                    </>
                }

            </nav>
        </header>
            <main className={styles.main} id="multiplayer-demo">
                <nav className={styles.left}>

                </nav>
                <article className={styles.article}>
                    {children}
                </article>
                <nav className={styles.right}>
                    {multiplayer.ready && <>
                        <Presence />
                        <Log />
                    </>
                    }
                </nav>
            </main>
        </>
    )
}

export default Content
