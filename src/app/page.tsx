'use client'; // Required for event handlers and hooks in App Router

import { invoke } from '@tauri-apps/api/core';
import { useState } from 'react';


export default function Home() {
  const [greeting, setGreeting] = useState('');

  const callRust = async () => {
    // Call the 'greet' command and set the response
    const result: string = await invoke('greet', { name: 'Next.js' });
    setGreeting(result);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl mb-4">Tauri + Next.js</h1>
      <p className="mb-6">Click the button to call a command from the Rust backend.</p>

      <button
        onClick={callRust}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Greet from Rust
      </button>

      {greeting && (
        <p className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
          <strong>Backend Response:</strong> {greeting}
        </p>
      )}
    </main>
  );
}