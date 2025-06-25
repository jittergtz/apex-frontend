"use client"
import React, { useState } from 'react'
import { main } from 'untun/cli'
import EmailList from './EmailList'
import { EmailItemS } from './EmailItem'

function Tabs() {
 const [tab, setTab] = useState("Email")
  return (
   <main>
    <div className='flex gap-3 mb-3 mt-8 items-center text-xl justify-between'>
        <div className='flex items-center gap-3'>
        <button className={` ${tab === "Email" ? " ": "text-[#A1A1A1] text-[16px]"}`} onClick={() => setTab("Email")}>Email</button>
        <button className={` ${tab === "Todo" ? "": "text-[#A1A1A1] text-[16px]"}`} onClick={() => setTab("Todo")}>Todo</button>
        <button className={` ${tab === "ComingUp" ? "": "text-[#A1A1A1] text-[16px]"}`} onClick={() => setTab("ComingUp")}>Coming up</button>
        </div>
    </div>

    {tab === "Eamil" ? (
        <>
        <EmailList/>
        </>
    ): tab === "Todo" ? (
        null
    ): tab === "ComingUp" ? (
        null
    ):
    <EmailList/>  }
    </main>
  )
}

export default Tabs