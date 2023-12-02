import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('Body', body.prompts);

  const completion = await openai.chat.completions.create({
    messages: body.prompts,
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices);
  const chat = [
    ...body.prompts,
    ...completion.choices.map((choice) => ({
      role: choice.message.role,
      content: choice.message.content,
    })),
  ];

  return NextResponse.json({
    responses: chat,
  });

  //   return NextResponse.json({
  //     message: 'Response arrived',
  //     responses: completion.choices,
  //   });
}
