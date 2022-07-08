import * as React from 'react'

//import Grid from 'core/components/ui/layouts/grid'
import Minimal from 'core/components/ui/layouts/minimal'
import Head from 'next/head'
import { ReactFCC } from 'core/types'

import * as Chakra from '@chakra-ui/react'

import { StoryContext } from 'core/containers/store-container'
import ResetButton from 'core/components/ui/reset-button'

//import styles from 'public/stories/custom-components/styles/Index.module.scss'

const Index: ReactFCC = ({ children }) => {
    const { config } = React.useContext(StoryContext)
    /*return (
        <Grid styles={styles} head={<link></link>}>
            {children}
        </Grid>
    )*/
    return (
        <Minimal>
            <Head>
                <title lang={config.language}>{config.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Chakra.Box backgroundColor="#026376" w="100%">
                <Chakra.Container as="header" color="white">
                    <Chakra.Heading>{config.title}</Chakra.Heading>
                    <ResetButton message="Recommencer l'histoire au début?" />
                </Chakra.Container>
            </Chakra.Box>

            <Chakra.Container
                as="main"
                mt="1em"
                p="2em"
                backgroundColor="#f4f1e8"
                rounded="md"
                boxShadow="base">
                {children}
            </Chakra.Container>
        </Minimal>
    )
}

export default Index
