'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import ChatItem from './components/chat-item';
import { botImage, veerbalImage } from './components/links';

export default function Home() {
  const [response, setResponse] = useState([]);
  return (
    <div className="w-screen h-screen ">
      <div className="chat-area w-1/2 mx-auto pt-6 flex flex-col gap-2">
        <ChatItem content="I am Veerbal" img={veerbalImage} type="user" />
        <ChatItem content="I am Bot" img={botImage} type="bot" />
      </div>
      <div className="input-element absolute bottom-0 m-10 left-1/2 -translate-x-1/2 flex gap-4">
        <Input placeholder="How can I help?" className="w-[400px]" />
        <Button>Submit</Button>
      </div>
    </div>
  );
}
