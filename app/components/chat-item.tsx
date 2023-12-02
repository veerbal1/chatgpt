import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

function ChatItem({
  type,
  content,
  img,
}: {
  content: string;
  img: string;
  type: 'user' | 'bot';
}) {
  return (
    <div
      className={cn(
        'p-4 border flex items-center gap-4',
        type === 'bot' && 'bg-gray-100',
        type === 'user' && 'bg-blue-100'
      )}
    >
      <Avatar className="w-6 h-6 rounded-full overflow-hidden">
        <AvatarImage src={img} />
      </Avatar>
      {content}
    </div>
  );
}

export default ChatItem;
