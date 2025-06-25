import React from 'react'

function EmailItem() {
  return (
    <div className='h-10 px-2 text-white flex items-center justify-between w-full rounded-lg bg-[#1A1A1A]'>
     <div className='flex gap-6 items-center'>
        <h1 className='text-[#CECECE]'>Nathan</h1>
        <p className='text-sm text-[#707070]'>Here the q3 report summary</p>
     </div>
     <div className='flex items-center gap-3'>
       <div className='bg-amber-500/20 p-1 text-sm px-2 rounded-lg text-amber-400'>answer</div>
       <button className='bg-neutral-800 hover:text-neutral-300 duration-100 p-1 px-3 rounded-lg text-sm text-neutral-500'>Action</button>
     </div>
    </div>
  )
}

export default EmailItem



export function EmailItemS() {
    return (
      <div className='h-10 px-2 text-white flex items-center justify-between w-full rounded-lg'>
       <div className='flex gap-6 items-center'>
          <h1 className='text-[#CECECE]'>Nathan</h1>
          <p className='text-sm text-[#707070]'>Here the q3 report summary</p>
       </div>
       <div className='flex items-center gap-3'>
         <div className='bg-amber-500/20 p-1 text-sm px-2 rounded-lg text-amber-400'>answer</div>
         <button className='bg-neutral-800 hover:text-neutral-300 duration-100 p-1 px-3 rounded-lg text-sm text-neutral-500'>Action</button>
       </div>
      </div>
    )
  }
  
