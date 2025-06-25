import React, { useState } from 'react'
import EmailItemP, { EmailItemS } from './EmailItem'
import { dummyEmails } from './MockData'

function EmailModal({ open, onClose, email }: { open: boolean, onClose: () => void, email: any }) {
  if (!open || !email) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white/80 backdrop-blur-xl dark:bg-neutral-900/80 rounded-xl shadow-xl p-8 w-[675px]   flex flex-col items-center relative  ">
        <button onClick={onClose} className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-white text-xl">&times;</button>
       
       <div className='flex  justify-between w-full  items-center gap-3'>
        <div className='flex  gap-3 items-center'>
        <h1>{email.sender}</h1>
        <h2 className="text-md   text-secondary ">{email.subject}</h2>
        </div>

        <div className=" text-neutral-500 text-sm"> {email.classification}</div>
        </div>
        
   
        <div className="mt-3 w-full rounded p-3 text-neutral-800 dark:text-neutral-200 text-sm">
          <p className="text-amber-500 dark:text-amber-300">Summary</p> 
          <p className=''>{email.aiSummary}</p>
        </div>
        <button className="mt-2 px-3 py-1 rounded-lg bg-neutral-200 text-neutral-800 tracking-tight  text-sm hover:bg-neutral-100 transition" onClick={() => alert('Open in Gmail (mock)')}>Open in Gmail</button>
      </div>
    </div>
  )
}

function EmailList() {
  // Sort emails by relevance descending (3 -> 0)
  const sortedEmails = [...dummyEmails].sort((a, b) => b.relevance - a.relevance);
  // Split into primary (2,3) and secondary (0,1)
  const primaryEmails = sortedEmails.filter(email => email.relevance >= 2);
  const secondaryEmails = sortedEmails.filter(email => email.relevance < 2);
  const allEmails = [...primaryEmails, ...secondaryEmails];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<any>(null);
  const [focusIndex, setFocusIndex] = useState(0);

  const handleActionClick = (email: any) => {
    setSelectedEmail(email);
    setModalOpen(true);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalOpen) {
        if (e.key === 'Escape') {
          setModalOpen(false);
        }
        return;
      }
      if (e.key === 'j' || e.key === 'ArrowDown') {
        setFocusIndex((prev) => Math.min(prev + 1, allEmails.length - 1));
      } else if (e.key === 'k' || e.key === 'ArrowUp') {
        setFocusIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        setSelectedEmail(allEmails[focusIndex]);
        setModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusIndex, allEmails, modalOpen]);

  return (
    <div className='flex flex-col gap-1  h-80 overflow-y-auto noscrollbar'>
      <EmailModal open={modalOpen} onClose={() => setModalOpen(false)} email={selectedEmail} />
      {/* Render all emails in order, highlight focused */}
      {allEmails.map((data, i) => {
        const isFocused = i === focusIndex;
        const commonProps = {
          sender: data.sender,
          subject: data.subject,
          classification: data.classification,
          relevance: data.relevance,
          onActionClick: () => handleActionClick(data),
          focused: isFocused,
        };
        if (data.relevance >= 2) {
          return (
            <div key={`p-${data.id}`} tabIndex={-1}>
              <EmailItemP {...commonProps} />
            </div>
          );
        } else {
          return (
            <div key={`s-${data.id}`} tabIndex={-1}>
              <EmailItemS {...commonProps} />
            </div>
          );
        }
      })}
    </div>
  )
}

export default EmailList