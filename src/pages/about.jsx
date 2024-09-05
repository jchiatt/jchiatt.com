import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { ExternalLink } from '@/components/ExternalLink'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - J.C. Hiatt</title>
        <meta
          name="description"
          content="I'm J.C. Hiatt. I live in Mississippi with my beautiful
              family, where I craft code and please the shareholders."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m J.C. Hiatt. I live in Mississippi with my beautiful
              family, where I craft code and please the shareholders.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My love of computers began when I was 6, where I spent my days
                playing{' '}
                <ExternalLink
                  href="https://en.wikipedia.org/wiki/Duke_Nukem"
                  alt="Duke Nukem"
                >
                  Duke Nukem
                </ExternalLink>{' '}
                on an old Pentium machine and{' '}
                <ExternalLink
                  href="https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red,_Blue,_and_Yellow"
                  alt="Pokemon Yellow"
                >
                  Pokemon Yellow
                </ExternalLink>{' '}
                on my{' '}
                <ExternalLink
                  href="https://en.wikipedia.org/wiki/Game_Boy_Color"
                  alt="Gameboy Color"
                >
                  Gameboy Color
                </ExternalLink>
                .
              </p>
              <p>
                Fast forward to 13 years old and I&apos;m quick-scoping fools
                and superbouncing out of the map on{' '}
                <ExternalLink
                  href="https://en.wikipedia.org/wiki/Halo_2"
                  alt="Halo 2"
                >
                  Halo 2
                </ExternalLink>
                . I&apos;ve been exposed to the concept of &quot;hacking&quot;
                &mdash; the ability to make a computer do anything I want
                &mdash; and it has gripped me. I&apos;ve finally made friends
                who are as nerdy as me on Xbox Live and I want to make a website
                for our &quot;hacker group&quot;.
              </p>
              <p>
                I spend a month at my grandma&apos;s in rural Mississippi. Armed
                with only a 2G connection and a{' '}
                <ExternalLink
                  href="https://en.wikipedia.org/wiki/Samsung_BlackJack"
                  className="text-teal-500 dark:text-teal-400"
                  alt="Samsung Blackjack"
                >
                  Samsung Blackjack
                </ExternalLink>
                , I go through HTML, CSS, and some JavaScript on{' '}
                <ExternalLink href="https://www.w3schools.com/" alt="W3Schools">
                  W3Schools
                </ExternalLink>{' '}
                (relax, it was 2005), and hand-write all my notes.
              </p>
              <p>
                I return home and finally have access to a computer again. I
                fire up Notepad++ and build my hacker group&apos;s website. The
                world is my oyster.
              </p>
              <p>
                For the rest of high school, I begin building websites for local
                businesses. After high school and a brief stint at a couple of
                jobs as a web developer, I quickly learn I do not enjoy working
                for others. I start my own ad agency, which then pivots to
                &quot;product agency&quot;, which then pivots to bankruptcy. 🙈
              </p>
              <p>
                I decide money is nice and working for others isn&apos;t so bad.
                From there, I become a tenacious learner. I&apos;d been
                programming and building websites in some capacity since I was
                13, but never with any formal training or mentors around to tell
                me how horrible my code was. I surround myself with great
                mentors (love you, Billy ❤️) and relentlessly consume as my
                knowledge and experice building things as quickly as I can.
              </p>
              <p>
                Fast forward 6 years and today I work as a Senior Software
                Engineer at Walmart and a CTO at an EdTech startup called{' '}
                <ExternalLink
                  href="https://www.learnarena.com"
                  alt="Learn Arena"
                >
                  Learn Arena
                </ExternalLink>
                . I absolutely love programming and what it has done for my
                life. Coding is a mystic art that allows me to create anything I
                want. I am an entrepreneur at heart and I love how empowering it
                is to be a technical entrepreneur.
              </p>
              <p>
                On any given day, you can find me coding in the coffee shop or
                my office, hanging with my beautiful family, or breaking arms
                and hearts on the mats at{' '}
                <ExternalLink
                  href="https://grapplebjj.com"
                  alt="Grapple Brazilian Jiu Jitsu"
                >
                  Grapple
                </ExternalLink>
                , my Brazilian Jiu Jitsu.
              </p>
              <p>
                I hope in some way I can make your life better even in just a
                small way. Thanks for stopping by. 👋
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://x.com/jchiatt"
                icon={XIcon}
                aria-label="Follow on X"
              >
                Follow on X
              </SocialLink>
              <SocialLink
                href="https://instagram.com/jchiatt"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/jchiatt"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/jchiatt"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:jc@jchiatt.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jc@jchiatt.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
