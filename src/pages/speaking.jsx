import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href} external>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - J.C. Hiatt</title>
        <meta
          name="description"
          content="I've spoken at many meetups and conferences, and I've been interviewed for a few podcasts."
        />
      </Head>
      <SimpleLayout
        title="I've spoken at many meetups and conferences, and I've been interviewed for a few podcasts."
        intro="One of my favorite ways to share my ideas is live on stage, where there's so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="https://www.youtube.com/watch?v=sSlSgWA0F28"
              title="Refactor Your Body for Better Performance"
              description="I founded a company called DevLifts, where I helped developers get fit and live healthier lives. This talk was the story behind that."
              event="Refactr Conference, September 2019"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=ZF-XybpC5TM"
              title="Fault Tolerance in React"
              description="A dive into fault tolerance, chaos engineering, and how to apply these concepts to your React applications."
              event="Jackson Area Web and App Developers, May 2019"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://podcasts.apple.com/us/podcast/organizing-a-conference-to-combat-brain-drain-in/id1308497805"
              title="Organizing a Conference to Combat Brain Drain in His Hometown with J.C. Hiatt"
              description="How I put together the conference MagnoliaJS in the town of Jackson, Mississippi to help my community and combat the growing problem of brain drain in my state."
              event="egghead.io developer chats, July 2019"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=Rx8Rk-DZxBw"
              title="JAM Performance with J.C. Hiatt of DevLifts"
              description="How we pieced together the JAM stack and many no-code tools to build a startup lightning fast."
              event="JAMStack Radio, April 2019"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=qGR0OtrHsW8"
              title="MJS 048: J.C. Hiatt"
              description="My appearance My JS Story, where I talked about my journey into programming and entrepreneurship."
              event="My JS Story, November 2018"
              cta="Listen to podcast"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
