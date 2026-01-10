'use client'

import { useState, useMemo } from 'react'
import { SORTED_PROFILES } from '@/app/profiles'
import { Search } from 'lucide-react'

type SortOption = 'default' | 'az' | 'za'

export default function LinkList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('default')

  const filteredAndSortedProfiles = useMemo(() => {
    let profiles = [...SORTED_PROFILES]

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      profiles = profiles.filter((profile) =>
        profile.displayName.toLowerCase().includes(lowerQuery)
      )
    }

    // Sort
    if (sortBy === 'az') {
      profiles.sort((a, b) => a.displayName.localeCompare(b.displayName))
    } else if (sortBy === 'za') {
      profiles.sort((a, b) => b.displayName.localeCompare(a.displayName))
    }
    // 'default' keeps the original order from SORTED_PROFILES

    return profiles
  }, [searchQuery, sortBy])

  return (
    <div className='flex w-full align-center self-center max-w-[800px] flex-col gap-6 md:w-[800px]'>
      <div className='flex mt-9 flex-col gap-4 sm:flex-row'>
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400' />
          <input
            type='text'
            placeholder='Search links...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full rounded-xl border border-zinc-700 bg-[#151414] py-3 pl-10 pr-4 text-zinc-100 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-500'
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className='rounded-xl border border-zinc-700 bg-[#151414] px-4 py-3 text-zinc-100 outline-none transition-colors focus:border-zinc-500'
        >
            <option value='default'>Default</option>
            <option value='az'>A-Z</option>
            <option value='za'>Z-A</option>
        </select>
      </div>

      <div className='grid mt-8 grid-cols-2 gap-4 sm:grid-cols-3'>
        {filteredAndSortedProfiles.map((link) => {
          const { icon, displayName: title, link: url } = link

          return (
            <a
              key={url}
              href={url}
              className='relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-4 py-4 transition-colors duration-300 hover:border-zinc-500'
              target='_blank'
              rel='noopener, noreferrer'
            >
              {icon ? <div className='absolute left-4'>{icon()}</div> : null}
              <div className='truncate px-6 text-center text-sm text-zinc-100'>{title}</div>
            </a>
          )
        })}
        {filteredAndSortedProfiles.length === 0 && (
            <div className='col-span-full w-full py-8 text-center text-zinc-500'>
                No links found matching "{searchQuery}"
            </div>
        )}
      </div>
    </div>
  )
}
