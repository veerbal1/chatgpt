import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { botImage, veerbalImage } from './links';

function ChatItem({
  type,
  content,
}: {
  content: string;
  img: string;
  type: 'user' | 'assistant';
}) {
  return (
    <div
      className={cn(
        'p-4 border flex items-center gap-4',
        type === 'assistant' && 'bg-gray-100',
        type === 'user' && 'bg-blue-100'
      )}
    >
      <Avatar className="w-6 h-6 rounded-full overflow-hidden">
        <AvatarImage src={type === 'assistant' ? botImage : veerbalImage} />
      </Avatar>
      <pre className='whitespace-pre-wrap'>{content}</pre>
    </div>
  );
}

export default ChatItem;
