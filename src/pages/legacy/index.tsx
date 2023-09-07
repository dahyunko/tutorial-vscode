import { LayoutNavigation } from '@/pages'
import React from 'react'

export default function LegacyPage() {
  return (
    <React.Fragment>
      <LayoutNavigation />
      <div className='flex flex-col gap-1 h-40'>
        <div>Legacy World 1</div>
        <div>Legacy World 2</div>
        <div>Legacy World 1</div>
        <div>Legacy World 2</div>
        <div>Legacy World 1</div>
        <div>Legacy World 2</div>
        <div>Legacy World 1</div>
        <div>Legacy World 2</div>
      </div>
    </React.Fragment>
  )
}