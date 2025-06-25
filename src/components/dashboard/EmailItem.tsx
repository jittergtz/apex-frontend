import React from 'react'

interface EmailProps {
  sender: string,
  classification: string,
  subject: string,
  relevance: number,
  onActionClick?: () => void,
  focused?: boolean,
}

// Helper component for relevance bars
function RelevanceBars({ relevance }: { relevance: number }) {
  return (
    <span className="flex items-center gap-0.5 ml-1" title={`Relevance: ${relevance}`}>
      {[1, 2, 3].map((level) => (
        <svg
          key={level}
          width="3"
          height="16"
          viewBox="0 0 4 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0"
            y={16 - level * 5}
            width="6"
            height={level * 5}
            rx="1"
            fill={relevance >= level ? '#878787' : '#374151'} // blue-400 or gray-700
          />
        </svg>
      ))}
    </span>
  );
}

function EmailItemP({sender, classification, subject, relevance, onActionClick, focused}: EmailProps) {
  return (
    <div className={`h-10 px-2 text-white flex items-center justify-between w-full rounded-lg ${focused ? 'bg-neutral-700' : 'bg-[#1A1A1A]'}`}>
     <div className='flex gap-6 items-center'>
        <h1 className='text-[#CECECE]'>{sender}</h1>
        <p className='text-sm text-[#707070]'>{subject}</p>
     </div>
     <div className='flex items-center gap-3'>
       <div className='bg-amber-500/20 p-1 text-sm px-2 rounded-lg text-amber-400'>{classification}</div>
       <RelevanceBars relevance={relevance} />
       <button
         className='bg-neutral-800 hover:text-neutral-300 duration-100 p-1 px-3 rounded-lg text-sm text-neutral-500'
         onClick={onActionClick}
       >
         Action
       </button>
     </div>
    </div>
  )
}

export default EmailItemP

export function EmailItemS({sender, classification, subject, relevance, onActionClick, focused}: EmailProps) {
    return (
      <div className={`h-10 px-2 text-white flex items-center justify-between w-full rounded-lg ${focused ? 'bg-neutral-200 dark:bg-neutral-800' : ''}`}>
       <div className='flex gap-6 items-center'>
          <h1 className=' text-emailName'>{sender}</h1>
          <p className='text-sm text-[#707070]'>{subject}</p>
       </div>
       <div className='flex items-center gap-3'>
         <div className='bg-amber-500/20 p-1 text-sm px-2 rounded-lg text-amber-400'>{classification}</div>
         <RelevanceBars relevance={relevance} />
         <button
           className='bg-neutral-800 hover:text-neutral-300 duration-100 p-1 px-3 rounded-lg text-sm text-neutral-500'
           onClick={onActionClick}
         >
           Action
         </button>
       </div>
      </div>
    )
  }
  
