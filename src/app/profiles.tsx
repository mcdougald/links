import type { ReactNode } from 'react'

import {
  IconBrandGmail,
  IconBrandMedium,
  IconBrandNpm,
  IconBrandPatreon,
  IconBrandReddit,
  IconBrandYoutube
} from '@tabler/icons-react'
import { Instagram, Linkedin } from 'lucide-react'
import { FaSpotify, FaStackExchange, FaStackOverflow } from 'react-icons/fa'
import { FiGithub, FiGitlab } from 'react-icons/fi'
import { SiCodementor, SiDevdotto, SiStackblitz, SiTensorflow } from 'react-icons/si'

import {
  AnacondaIcon,
  BehanceIcon,
  BmcIcon,
  DiscordIcon,
  DribbbleIcon,
  GoodReadsIcon,
  HackerRankIcon,
  HuggingFaceIcon,
  MeetupIcon,
  PyPiIcon,
  ReplitIcon,
  SvgKaggle
} from '../components/icons'
import Codepen from '../components/icons/codepen'
import Codesandbox from '../components/icons/codesandbox'
import Facebook from '../components/icons/facebook'

export type IconProps = {
  color?: string
  backgroundColor?: string
  size?: number
  className?: string
}
export type Company = {
  link: string
  name: string
  displayName: string
  category: string
  description: string
  help?: string
  icon?: () => ReactNode
  joined?: string
  /**
   * Used to differentiate between active accounts vs non
   */
  level?: 'primary' | 'secondary'
  /**
   * Name of my account in the platform
   */
  accountName: string
}

const PLATFORMS = {
  Instagram: 'https://instagram.com/{username}',
  // Twitter: 'https://twitter.com/{username}',
  Facebook: 'https://www.facebook.com/{username}',
  Reddit: 'https://www.reddit.com/user/{username}',
  Bluesky: 'https://bsky.app/profile/{username}',
  Mastodon: 'https://mastodon.social/@{username}',
  VK: 'https://vk.com/{username}',
  Pinterest: 'https://pinterest.com/{username}',
  YouTube: 'https://www.youtube.com/@{username}',
  Twitch: 'https://www.twitch.tv/{username}',
  Vimeo: 'https://vimeo.com/{username}',
  Rumble: 'https://rumble.com/user/{username}',
  Dailymotion: 'https://www.dailymotion.com/{username}',
  LinkedIn: 'https://www.linkedin.com/in/{username}',
  Slack: 'https://{username}.slack.com',
  Fiverr: 'https://www.fiverr.com/{username}',
  GitHub: 'https://github.com/{username}',
  GitLab: 'https://gitlab.com/{username}',
  Behance: 'https://www.behance.net/{username}',
  Trello: 'https://trello.com/{username}',
  StreamGroup: 'https://streamgroup.com/{username}',
  Lichess: 'https://lichess.org/@/{username}',
  Minecraft: 'https://minecraft.net/profile/{username}',
  // 'Chess.com': 'https://www.chess.com/member/{username}',
  osu: 'https://osu.ppy.sh/u/{username}',
  'Google PlayStore': 'https://play.google.com/store/apps/developer?id={username}',
  Medium: 'https://medium.com/@{username}',
  Hashnode: 'https://hashnode.com/@{username}',
  Blogger: 'https://{username}.blogspot.com',
  Slides: 'https://slides.com/{username}',
  Spotify: 'https://open.spotify.com/user/{username}',
  SoundCloud: 'https://soundcloud.com/{username}',
  PromoDJ: 'https://promodj.com/{username}',
  Freesound: 'https://freesound.org/people/{username}',
  Flickr: 'https://www.flickr.com/photos/{username}',
  Unsplash: 'https://unsplash.com/@{username}',
  VSCO: 'https://vsco.co/{username}/gallery',
  Telegram: 'https://t.me/{username}',
  Signal: 'https://signal.me/#p/{username}',
  Kik: 'https://kik.me/{username}',
  Imgur: 'https://imgur.com/user/{username}',
  npm: 'https://www.npmjs.com/~{username}',
  PyPi: 'https://pypi.org/user/{username}',
  'DEV Community': 'https://dev.to/{username}',
  'Apple Developer': 'https://developer.apple.com/{username}',
  DockerHub: 'https://hub.docker.com/u/{username}',
  'Replit.com': 'https://replit.com/@{username}',
  // Leetcode: 'https://leetcode.com/{username}',
  HackerRank: 'https://www.hackerrank.com/{username}',
  Codepen: 'https://codepen.io/{username}',
  HackerOne: 'https://hackerone.com/{username}',
  GeeksforGeeks: 'https://auth.geeksforgeeks.org/user/{username}/profile',
  Kaggle: 'https://www.kaggle.com/{username}',
  GitBook: 'https://{username}.gitbook.io',
  Freelancer: 'https://www.freelancer.com/u/userprofile',
  Upwork: 'https://www.upwork.com/freelancers/~userprofile',
  ProductHunt: 'https://www.producthunt.com/@{username}',
  FreeCodeCamp: 'https://freecodecamp.org/news/author/{username}',
  DailyDev: 'https://app.daily.dev/{username}',
  RubyGems: 'https://rubygems.org/profiles/{username}',
  Gradle: 'https://plugins.gradle.org/u/{username}',
  CodersRank: 'https://profile.codersrank.io/user/{username}/',
  CodeAcademy: 'https://www.codecademy.com/profiles/{username}',
  Bitbucket: 'https://bitbucket.org/{username}/'
}

const linkedin: Company = {
  link: 'https://www.linkedin.com/in/trevormcdougald/',
  name: 'Linkedin',
  displayName: 'Linkedin',
  category: 'Career',
  description: 'Linkedin has an up to date reference for my work history',
  help: 'school pw',

  icon: () => <Linkedin />,
  joined: '03-29-2016',
  level: 'primary',
  accountName: 'trevormcdougald'
}

const anaconda: Company = {
  link: 'https://anaconda.org/trevormcdougald',
  name: 'Anaconda.org',
  displayName: 'Anaconda',
  category: 'Data Science',
  description:
    'For managing data science projects, not many contributions from me but love the python community here.',
  help: 'school pw',
  icon: () => (
    <AnacondaIcon svg={{ className: 'w-[24px] [&>path]: fill-[white]' }} path={{ fill: 'white' }} />
  ),
  joined: '03-29-2017',
  level: 'secondary',
  accountName: 'trevormcdougald'
}

const behance: Company = {
  link: 'https://www.behance.net/trevormcdougald',
  name: 'Behance',
  displayName: 'Behance',
  category: 'Design',
  description: 'Platform for showcasing and discovering creative work',
  help: 'school pw',
  icon: BehanceIcon,
  joined: '03-29-2020',
  level: 'secondary',
  accountName: 'trevormcdougald'
}

const buyMeACoffee: Company = {
  link: 'https://www.buymeacoffee.com/trevormcdog',
  name: 'Buymeacoffee',
  displayName: 'Buy Me A Coffee',
  category: 'Support',
  description: 'Platform for supporting creators through virtual coffees',
  joined: '01-23-2023',
  icon: () => <BmcIcon className={'w-[24px]'} />,
  level: 'secondary',
  accountName: 'trevormcdog'
}

const codeMentor: Company = {
  link: 'https://www.codementor.io/@trevormcdougald',
  name: 'CodeMentor',
  displayName: 'CodeMentor',
  category: 'Development',
  description:
    'For mentorship and learning programming. I try to contribute some time weekly to help others.',
  joined: '01-02-2024',
  icon: () => <SiCodementor />,
  level: 'secondary',
  accountName: 'trevormcdougald'
}

const codePen: Company = {
  link: 'https://codepen.io/trevormcdougald',
  name: 'Codepen',
  displayName: 'CodePen',
  category: 'Development',
  icon: () => <Codepen />,
  description:
    'For testing HTML, CSS, and JavaScript code snippets. I prefer CodeSandbox or Stackblitz for more complex projects.',
  joined: '09-17-2020',
  level: 'secondary',
  accountName: 'trevormcdougald'
}

const codeSandbox: Company = {
  link: 'https://codesandbox.io/u/TrevorMcDougald',
  name: 'Codesandbox',
  displayName: 'CodeSandbox',
  category: 'Development',
  icon: () => <Codesandbox />,
  description:
    'Online code editor and sandbox environment. I have many react dashboard/admin-panel projects saved and contributed to',
  joined: '07-2-2020',
  level: 'secondary',
  accountName: 'TrevorMcDougald'
}

const devTo: Company = {
  link: 'https://dev.to/trevormcdougald',
  name: 'Dev.to',
  displayName: 'Dev.to',
  category: 'Blogging',
  description:
    'For developers to share knowledge and insights. I prefer to host my blog-post here.',
  joined: '07-11-2020',
  icon: () => <SiDevdotto width={24} />,
  level: 'secondary',
  accountName: 'trevormcdougald'
}

const discord: Company = {
  link: 'https://discord.com/users/494882115360522275',
  name: 'Discord',
  displayName: 'Discord',
  category: 'Communication',
  icon: () => <DiscordIcon fill={'white'} width={24} />,
  description:
    'Platform for dev communities. Out of slack, zoom, etc. Discord seems to provide the best bots/chat-ops surprisingly.',
  joined: '09-27-2018',
  level: 'secondary',
  accountName: '494882115360522275'
}

const dribbble: Company = {
  link: 'https://dribbble.com/McDougald',
  name: 'Dribbble',
  displayName: 'Dribbble',
  category: 'Design',
  icon: DribbbleIcon,
  description:
    "For designers to show and discover creative work. Some older work I've posted is hosted here",
  joined: '04-02-2020',
  level: 'secondary',
  accountName: 'McDougald'
}

const facebook: Company = {
  link: 'https://www.facebook.com/trevor.mcdougald.7/',
  name: 'Facebook',
  displayName: 'Facebook',
  icon: () => <Facebook />,
  category: "My Meta FB Social Media. I prefer friends & family here and don't post much.",
  description: 'Social networking platform',
  joined: '02-05-2014',
  level: 'secondary',
  accountName: 'Trevor McDougald'
}

const gist: Company = {
  link: 'https://gist.github.com/mcdougald',
  name: 'Gist',
  displayName: 'Gist',
  category: 'Development',
  icon: () => <FiGithub />,
  description: 'A place I share & save snippets',
  joined: '04-23-2018',
  level: 'secondary',
  accountName: 'mcdougald'
}

const gitHub: Company = {
  link: 'https://github.com/mcdougald',
  name: 'GitHub',
  displayName: 'GitHub',
  icon: () => <FiGithub fill={'white'} />,
  category: 'Development',
  description: 'GitHub is my preferred platform for code-repositories / projects.',
  joined: '10-02-2018',
  level: 'primary',
  accountName: 'mcdougald'
}

const gitLab: Company = {
  link: 'https://gitlab.com/TrevorMcDougald',
  name: 'Gitlab',
  displayName: 'GitLab',
  icon: () => <FiGitlab />,
  category: 'Development',
  description:
    'Back-up Git repository and version control system. I sometimes browse here for any interesting/large typescript projects',
  joined: '10-30-2019',
  level: 'secondary',
  accountName: 'TrevorMcDougald'
}

const goodreads: Company = {
  link: 'https://www.goodreads.com/user/show/175207507-trevor-mcdougald',
  name: 'Goodreads',
  displayName: 'Goodreads',
  category: 'Community',
  icon: () => <GoodReadsIcon fill={'white'} width={24} />,
  description: 'Social cataloging platform for book lovers',
  joined: '01-10-2024',
  level: 'secondary',
  accountName: 'Trevor-Mcdougald'
}

const hackerrank: Company = {
  link: 'https://www.hackerrank.com/profile/McDougald',
  name: 'Hackerrank',
  displayName: 'HackerRank',
  category: 'Development',
  description: 'Coding platform to practice and improve programming skills',
  joined: '01-04-2020',
  help: 'engineer email',
  icon: () => <HackerRankIcon className={'w-[24px]'} />,
  level: 'secondary',
  accountName: 'McDougald'
}

const huggingface: Company = {
  link: 'https://huggingface.co/McDougald',
  name: 'Huggingface',
  displayName: 'HuggingFace',
  category: 'Data Science',
  description: 'Natural language processing library and model repository',
  joined: '06-14-2023',
  icon: () => <HuggingFaceIcon width={24} />,
  level: 'secondary',
  accountName: 'McDougald'
}

const instagram: Company = {
  link: 'https://www.instagram.com/trevormcdougald/',
  name: 'Instagram',
  displayName: 'Instagram',

  icon: () => <Instagram />,
  category: 'Social Media',
  description: 'Photo and video sharing social networking service',
  level: 'secondary',
  joined: '09-05-2014',
  accountName: 'trevormcdougald'
}

const kaggle: Company = {
  link: 'https://www.kaggle.com/trevormcdougald',
  name: 'Kaggle',
  displayName: 'Kaggle',
  category: 'Data Science',
  description: 'Data science and machine learning community',
  joined: '04-20-2019',
  icon: () => <SvgKaggle svg={{ width: 24 }} path={{ fill: 'white' }} />,
  level: 'secondary',
  accountName: 'trevormcdougald'
}

const medium: Company = {
  link: 'https://medium.com/@mcdougald.job',
  name: 'Medium',
  displayName: 'Medium',
  category: 'Blogging',
  description: 'Platform for sharing knowledge and insights',
  joined: '08-05-2019',
  icon: () => <IconBrandMedium />,
  level: 'secondary',
  accountName: 'mcdougald.job'
}

const reddit: Company = {
  link: 'https://www.reddit.com/user/T-revTheDev',
  name: 'Reddit',
  displayName: 'Reddit',
  category: 'Community',
  icon: () => <IconBrandReddit />,
  description: 'Online community for various topics and discussions',
  help: 'main email',
  joined: '01-11-2020',
  level: 'primary',
  accountName: 'T-revTheDev'
}

const replit: Company = {
  link: 'https://replit.com/@trevormcdougald',
  name: 'Replit',
  displayName: 'Replit',
  category: 'Development',
  description: 'Online IDE and coding platform',
  joined: '02-19-2019',
  icon: () => <ReplitIcon svg={{ width: 24 }} path={{ fill: 'white' }} />,
  level: 'secondary',
  accountName: 'trevormcdougald'
}

const spotify: Company = {
  link: 'https://open.spotify.com/user/t-revr?si=5aeb88fc87cc4986',
  name: 'Spotify',
  displayName: 'Spotify',
  category: 'Entertainment',
  description: 'Music streaming platform',
  joined: '09-05-2015',
  icon: () => <FaSpotify />,
  level: 'secondary',
  accountName: 't-revr'
}

const stackblitz: Company = {
  link: 'https://stackblitz.com/@mcdougald',
  name: 'Stackblitz',
  displayName: 'Stackblitz',
  category: 'Development',
  description: 'Online IDE for web applications',
  joined: '02-1-2021',
  icon: () => <SiStackblitz />,
  level: 'secondary',
  accountName: 'mcdougald'
}

const stackExchange: Company = {
  link: 'https://stackexchange.com/users/6800431/trevor-mcdougald?tab=top',
  name: 'StackExchange',
  displayName: 'StackExchange',
  category: 'Community',
  description: 'Community-driven question and answer site',
  joined: '07-02-2019',
  icon: () => <FaStackExchange />,
  level: 'primary',
  accountName: 'trevor-mcdougald'
}

const stackOverflow: Company = {
  link: 'https://stackoverflow.com/users/5233908/trevor-mcdougald',
  name: 'StackOverflow',
  displayName: 'StackOverflow',
  category: 'Development',
  description: 'Q&A platform for programming-related questions',
  joined: '09-05-2015',
  icon: () => <FaStackOverflow />,
  level: 'secondary',
  accountName: 'trevor-mcdougald'
}

const tensorFlow: Company = {
  link: 'https://discuss.tensorflow.org/u/trevor_mcdougald',
  name: 'discuss.tensorflow.org',
  displayName: 'TensorFlow',
  category: 'Community',
  description: 'Community forum for TensorFlow users',
  joined: '02-12-2024',
  icon: () => <SiTensorflow />,
  level: 'secondary',
  accountName: 'trevor_mcdougald'
}

const npmjs: Company = {
  link: 'https://www.npmjs.com/~trevormcdougald/',
  name: 'npmjs',
  displayName: 'npmjs',
  category: 'Development',
  icon: () => <IconBrandNpm />,
  description: 'Package registry for JavaScript',
  joined: '02-1-2024',
  level: 'secondary',
  accountName: 'trevormcdougald'
}

const meetup: Company = {
  link: 'https://www.meetup.com/members/390822083/',
  name: 'Meetup',
  displayName: 'Meetup',
  category: 'Community',
  description: 'Social networking platform for organizing and attending events',
  joined: '01-12-2023',
  icon: () => <MeetupIcon size={24} />,
  level: 'secondary',
  accountName: '390822083'
}

const patreon: Company = {
  link: 'https://patreon.com/McDougald',
  name: 'Patreon',
  icon: () => <IconBrandPatreon />,
  displayName: 'Patreon',
  category: 'Membership',
  description: 'You can support my charitable / open-source work here.',
  joined: '01-12-2024',
  level: 'secondary',
  accountName: 'McDougald'
}

const youTube: Company = {
  link: 'https://patreon.com/McDougald',
  name: 'YouTube',
  displayName: 'YouTube',
  category: 'Membership',
  description: 'Not used to post any content',
  icon: () => <IconBrandYoutube />,
  level: 'secondary',
  joined: '01-12-2023',
  accountName: 'McDougald'
}

const pyPi: Company = {
  link: 'https://pypi.org/',
  name: 'Pypi',
  displayName: 'PyPi',
  category: 'Development',
  icon: () => <PyPiIcon />,
  description: 'Package repository for Python',
  level: 'secondary',
  joined: '01-12-2020',
  accountName: 'McDougald'
}

const gmail: Company = {
  link: 'mailto:mcdougald.job@gmail.com',
  name: 'Gmail',
  displayName: 'Gmail',
  icon: () => <IconBrandGmail />,
  category: 'Career',
  description: 'Package repository for Python',
  level: 'primary',
  joined: '01-12-2013',
  accountName: '@mcdougald.job'
}

export const PROFILES = {
  linkedin,
  anaconda,
  behance,
  buyMeACoffee,
  codeMentor,
  codePen,
  codeSandbox,
  devTo,
  discord,
  dribbble,
  facebook,
  gist,
  gitHub,
  gitLab,
  goodreads,
  hackerrank,
  huggingface,
  instagram,
  kaggle,
  medium,
  reddit,
  replit,
  spotify,
  stackblitz,
  stackExchange,
  stackOverflow,
  tensorFlow,
  npmjs,
  meetup,
  patreon,
  youTube,
  pyPi,
  gmail
} as Record<string, Company>

export const PRIMARY_PROFILES = Object.values(PROFILES).filter((p) => p.level === 'primary')
export const SECONDARY_PROFILES = Object.values(PROFILES).filter((p) => p.level === 'secondary')

export const SORTED_PROFILES = [...PRIMARY_PROFILES, ...SECONDARY_PROFILES]

export const ProfileInformation: Company[] = Object.values(PROFILES)
