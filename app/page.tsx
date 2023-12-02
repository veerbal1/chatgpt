'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import ChatItem from './components/chat-item';
import { botImage, veerbalImage } from './components/links';

type responseType = {
  role: 'user' | 'assistant';
  content: string;
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState<responseType[]>([]);

  const sendPrompt = () => {
    setLoading(true);
    setPrompt('');
    fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({
        prompts: [
          ...responses,
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setResponses((prevState) => [...data.responses]);
      });
  };

  return (
    <div className="w-screen h-screen ">
      <div className="chat-area w-1/2 mx-auto pt-6 flex flex-col gap-2 overflow-scroll h-3/4">
        {responses.map((response, index) => (
          <ChatItem
            key={index}
            content={response.content}
            img={botImage}
            type={response.role}
          />
        ))}
      </div>
      <div className="input-element absolute bottom-0 m-10 left-1/2 -translate-x-1/2 flex gap-4">
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="How can I help?"
          className="w-[400px]"
        />
        <Button disabled={loading} onClick={sendPrompt}>
          Submit
        </Button>
      </div>
    </div>
  );
}
