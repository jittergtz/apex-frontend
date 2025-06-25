import React from 'react'
import EmailItem, { EmailItemS } from './EmailItem'

function EmailList() {
  return (
    <div className='flex flex-col gap-1'>
        <EmailItem/>
        <EmailItemS/>
    </div>
  )
}

export default EmailList