import { FiBook } from 'react-icons/fi'
import {
  SiDevdotto,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiStackoverflow,
  SiX
} from 'react-icons/si'

export const links = [
  {
    icon: <FiBook className='text-zinc-300' />,
    title: 'Blog',
    url: 'https://trev.fyi/posts'
  },
  {
    icon: <SiFacebook className='text-zinc-300' />,
    title: 'Facebook',
    url: 'https://www.facebook.com/trevormcdougald.7/'
  },
  {
    icon: <SiInstagram className='text-zinc-300' />,
    title: 'Instagram',
    url: 'https://instagram.com/trevormcdougald/'
  },
  {
    icon: <SiGithub className='text-zinc-300' />,
    title: 'GitHub',
    url: 'https://github.com/mcdougald'
  },
  {
    icon: <SiDiscord className='text-zinc-300' />,
    title: 'Discord',
    url: 'https://discordapp.com/users/886269624608522240'
  },
  {
    icon: <SiX className='text-zinc-300' />,
    title: 'X',
    url: 'https://x.com/tszhong0411'
  },
  {
    icon: <SiStackoverflow className='text-zinc-300' />,
    title: 'Stack overflow',
    url: 'https://stackoverflow.com/users/15166428'
  },
  {
    icon: <SiDevdotto className='text-zinc-300' />,
    title: 'Dev.to',
    url: 'https://dev.to/tszhong0411'
  }
]
