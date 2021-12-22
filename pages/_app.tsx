/**
 * A custom NextJS App that pulls in the default (system-level) CSS.
 *
 * @see {@link https://nextjs.org/docs/advanced-features/custom-app}
 *
 * Story authors should not need to modify this file, but if you need to make any changes
 * that can only be supported by a custom App, know that these will apply to all stories
 * hosted in this Windrift installation.
 */
import 'public/global.scss'

import '@fontsource/alegreya/400.css'
import '@fontsource/alegreya/700.css'

import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

function WindriftApp({ Component, pageProps }: AppProps): JSX.Element {
    const theme = extendTheme({
        fonts: {
            heading: 'Alegreya',
            body: 'Alegreya'
        },
        styles: {
            global: {
                'html, body': {
                    backgroundColor: '#dbd1b4'
                },
                'main a': {
                    textDecoration: 'underline',
                    color: '#026376'
                },
                'main .coloredText a': {
                    color: 'white'
                },
                'main.story p, main.story h2, main.story h3': {
                    marginBottom: '1em'
                }
            }
        }
    })

    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default WindriftApp
