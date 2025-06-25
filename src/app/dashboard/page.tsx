import EmailList from '@/components/dashboard/EmailList'
import Summary from '@/components/dashboard/Summary'
import Tabs from '@/components/dashboard/Tabs'
import React from 'react'
import { main } from 'untun/cli'

function page() {
  return (
    <main className='p-1 px-2 flex flex-col items-center'>
           <h1 className=' text-secondary absolute top-1 right-2'>Apex</h1>
        <div className='max-w-2xl w-full relative'>
     
        <Summary />
        
        <Tabs/>
        </div>
    </main>
  )
}

export default page