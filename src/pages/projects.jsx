import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoDevlifts from '@/images/logos/devlifts.jpg'
import logoEndOfIE from '@/images/logos/endofie.png'
import logoMagnoliaJs from '@/images/logos/magnoliajs.png'
import logoPartyChat from '@/images/logos/party_chat.png'
import logoBitcoinBubbleMyth from '@/images/logos/bitcoin.png'
import logoLearnArena from '@/images/logos/learn_arena.png'

const projects = [
  {
    name: 'Learn Arena',
    description:
      'A competitive education platform where you can compete and win money learning to code.',
    link: { href: 'http://learnarena.com', label: 'learnarena.com' },
    logo: logoLearnArena,
  },
  {
    name: 'EndOfIE.party',
    description:
      'A fun website counting down the days until Internet Explorer is no longer supported.',
    link: { href: 'https://endofie.party', label: 'endofie.party' },
    logo: logoEndOfIE,
  },
  {
    name: 'Party Chat',
    description:
      'A Telnet server written in TypeScript as a take-home project during a job interview.',
    link: {
      href: 'https://github.com/jchiatt/telnet-chat-server',
      label: 'github.com',
    },
    logo: logoPartyChat,
  },
  {
    name: 'MagnoliaJS',
    description:
      "A web development conference (and Mississippi's first ever tech conference) that I started and ran for the first two years.",
    link: {
      href: 'https://github.com/jchiatt/magnoliajs.com',
      label: 'github.com',
    },
    logo: logoMagnoliaJs,
  },
  {
    name: 'DevLifts',
    description:
      'A company I co-founded to help developers stay fit and live healthier lives.',
    link: {
      href: 'https://devlifts.io',
      label: 'devlifts.io',
    },
    logo: logoDevlifts,
  },
  {
    name: 'Bitcoin Bubble Myth',
    description:
      'A website I built to supplement the debate between Joel Bomgar and John Mackey answering the question "Is Bitcoin a Bubble."',
    link: {
      href: 'https://www.bitcoinbubblemyth.com/',
      label: 'bitcoinbubblemyth.com',
    },
    logo: logoBitcoinBubbleMyth,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - J.C. Hiatt</title>
        <meta
          name="description"
          content="Things I've made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I've made trying to put my dent in the universe."
        intro="Out of the projects I've worked on that I am allowed to talk about, here are the ones I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link external href={project.link.href}>
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
