import Image from 'next/image'

import { SORTED_PROFILES } from '@/app/profiles'
import Spotlight from '@/components/spotlight'

import PrimaryLinks from './primary-links'

const HomePage = () => {
  return (
    <>
      <div className='relative mx-auto flex flex-col items-center justify-center gap-4 pb-10 pt-24'>
        <Spotlight className='-top-4 left-56' />
        <Image
          src='https://trev.fyi/images/avatar.png'
          width={90}
          height={90}
          alt='Logo'
          className='rounded-full'
          priority
        />
        <h1 className='max-w-md text-center text-6xl font-semibold'>Trevor McDougald</h1>
        <p className='text-xl text-[#a1a1a1]'>Full Stack Engineer</p>
      </div>
      <PrimaryLinks />
      <div className='mx-auto flex w-[600px] flex-wrap gap-4 py-3'>
        {SORTED_PROFILES.map((link) => {
          const { icon, displayName: title, link: url } = link

          return (
            <a
              key={url}
              href={url}
              className='w-7/10 relative flex h-14 min-w-[45%] items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 py-4 transition-colors duration-300 hover:border-zinc-500'
              target='_blank'
              rel='noopener, noreferrer'
            >
              {icon ? <div className='absolute left-8'>{icon()}</div> : null}
              <div className='text-zinc-100'>{title}</div>
            </a>
          )
        })}
      </div>
    </>
  )
}

export default HomePage
