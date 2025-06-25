import React from 'react'
import { dummySummary } from './MockData'

function Summary() {
  return (
    <section className=' mt-12 flex flex-col gap-2 '>
        <h1 className='text-xl '>Summary</h1>
        <p className='text-summarytext'>
            {dummySummary}
            </p>
    </section>
  )
}

export default Summary