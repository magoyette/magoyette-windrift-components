import { Section, Chapter, Choice } from 'core/components'
import { PageType } from 'core/types'
import {
    Box,
    Hide,
    Link,
    ReplaceLink,
    ReplaceText,
    ReplaceTextLink,
    Reveal
} from 'custom/components'
import { Heading } from '@chakra-ui/react'

export const Page: PageType = () => (
    <Chapter filename="chapter1">
        <Section>
            <Heading as="h1" size="xl">
                Custom Components
            </Heading>
            <Heading as="h2" size="lg">
                Box
            </Heading>
            <Box isItalic={true}>This italic text is inside a box.</Box>
            <Box title="The title of the box" color="white" backgroundColor="black">
                This box has a title.
            </Box>
            <Box title="A colored title" titleColor="white" titleBackgroundColor="#026376">
                This box has a title with different colors.
            </Box>
            <Heading as="h2" size="lg">
                Hide
            </Heading>
            <Choice options={[['Hide the Hide']]} last="" tag="hide" />
            <Hide on={['hide']}>
                <p>Hide is displayed for now.</p>
            </Hide>
            <Heading as="h2" size="lg">
                Reveal
            </Heading>
            <Choice options={[['Reveal the Reveal']]} last="" tag="reveal" />
            <Reveal on={['reveal']}>
                <p>Reveal is now displayed.</p>
            </Reveal>
            <Heading as="h2" size="lg">
                ReplaceText
            </Heading>
            <p>
                This text{' '}
                <ReplaceText
                    on={['replaceText']}
                    initialText="will be replaced"
                    finalText="has been replaced"
                    discardColorsOn={['discardReplaceText']}
                />
                . <Link text="Trigger the replacement" tag="replaceText" hideOn={['replaceText']} />
            </p>
            <p>
                <Link
                    text="Discard the colors"
                    tag="discardReplaceText"
                    hideOn={['discardReplaceText']}
                />
            </p>
            <Heading as="h2" size="lg">
                ReplaceLink
            </Heading>
            <p>
                <ReplaceLink
                    revealOn={['replaceLink']}
                    initialText="This text will be replaced"
                    linkText="Click here to replace to a final value"
                    finalText="This text was replaced"
                    tag="replaceLinkTriggered"
                    discardColorsOn={['discardReplaceLink']}
                    hideOn={['hideReplaceLink']}
                />
            </p>
            <p>
                <Link text="Trigger the replacement" tag="replaceLink" hideOn={['replaceLink']} />
            </p>
            <Reveal on={['replaceLinkTriggered']}>
                <p>
                    <Link
                        text="Discard the colors"
                        tag="discardReplaceLink"
                        hideOn={['discardReplaceLink', 'hideReplaceLink']}
                    />
                </p>
                <p>
                    <Link text="Hide the link" tag="hideReplaceLink" hideOn={['hideReplaceLink']} />
                </p>
            </Reveal>
            <Heading as="h2" size="lg">
                ReplaceTextLink
            </Heading>
            <p>
                <ReplaceTextLink
                    initialText="Click to replace this text a first time"
                    linkText="Click to replace this text again"
                    finalText="This text was replaced twice"
                    tag="replaceTextLinkTriggered"
                />
            </p>
            <p>
                <ReplaceTextLink
                    initialText="Click to replace this text once"
                    finalText="This text was replaced once"
                    tag="replaceTextLinkTriggeredWithoutLinkText"
                />
            </p>
        </Section>
    </Chapter>
)
