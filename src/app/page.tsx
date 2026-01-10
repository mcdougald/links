import Image from 'next/image'

import LinkList from '@/app/link-list'
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
        <h1 className='max-w-md text-center text-8xl font-semibold'>Trevor McDougald</h1>
        <p className='text-2xl text-[#a1a1a1]'>Full Stack Engineer</p>
      </div>
      <PrimaryLinks />
      <LinkList />
    </>
  )
}

export default HomePage
