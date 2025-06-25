import EmailList from '@/components/dashboard/EmailList'
import Summary from '@/components/dashboard/Summary'
import Tabs from '@/components/dashboard/Tabs'
import Link from 'next/link'
import React from 'react'
import { Bolt } from 'lucide-react';


function page() {
  return (
    <main className='p-1 px-2 flex flex-col items-center'>

           <div className='  absolute top-1 right-2'>
            <div className='flex items-center gap-3'>
           <Link  className='text-secondary  hover:text-black dark:hover:text-neutral-200' href={'/dashboard/settings'}><Bolt className=' size-4'  /></Link>
           <Link  className='text-secondary  hover:text-black dark:hover:text-neutral-200' href={'/dashboard/settings'}><Bolt className=' size-4'  /></Link>
          
           </div>
           </div>
          
        <div className='max-w-2xl w-full relative'>
     
        <Summary />
       
        
        <Tabs/>
        </div>
    </main>
  )
}

export default page


