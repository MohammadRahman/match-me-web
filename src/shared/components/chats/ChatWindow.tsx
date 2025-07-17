import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiMessageSquare, FiX, FiSend, FiChevronDown } from 'react-icons/fi';

// Types
type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
};

type ChatWindowProps = {
  profile: {
    id: string;
    name: string;
    avatar: string;
    online: boolean;
  };
  onClose: () => void;
};

// Styled Components
const ChatWindowContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  background: white;
  border: 1px solid black;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  overflow: hidden;
`;

const ChatHeader = styled.div<{ online: boolean }>`
  background: ${props => props.online ? '#4299e1' : '#a0aec0'};
  color: white;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div<{ online: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.online ? '#48bb78' : '#e53e3e'};
    border: 2px solid white;
  }
`;

const ChatControls = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  svg {
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ChatBody = styled.div`
  height: 300px;
  overflow-y: auto;
  padding: 16px;
  background: #f7fafc;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MessageBubble = styled.div<{ isCurrentUser: boolean }>`
  max-width: 80%;
  padding: 8px 12px;
  border-radius: ${props => props.isCurrentUser ? '12px 12px 0 12px' : '12px 12px 12px 0'};
  background: ${props => props.isCurrentUser ? '#4299e1' : '#edf2f7'};
  color: ${props => props.isCurrentUser ? 'white' : '#2d3748'};
  align-self: ${props => props.isCurrentUser ? 'flex-end' : 'flex-start'};
  font-size: 0.9rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const MessageTime = styled.span`
  display: block;
  font-size: 0.7rem;
  margin-top: 4px;
  opacity: 0.7;
  text-align: ${props => props.isCurrentUser ? 'right' : 'left'};
`;

const ChatFooter = styled.div`
  padding: 12px;
  background: white;
  border-top: 1px solid #e2e8f0;
  display: flex;
  gap: 8px;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #4299e1;
  }
`;

const SendButton = styled.button`
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3182ce;
  }

  &:disabled {
    background: #a0aec0;
    cursor: not-allowed;
  }
`;

const MinimizeButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

const ChatWindow = ({ profile, onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock initial messages
  useEffect(() => {
    setMessages([
      {
        id: '1',
        senderId: 'current-user',
        text: 'Hi there! How are you?',
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
      },
      {
        id: '2',
        senderId: profile.id,
        text: "I'm good, thanks! How about you?",
        timestamp: new Date(Date.now() - 1000 * 60 * 3),
      },
      {
        id: '3',
        senderId: 'current-user',
        text: "Doing well! Just wanted to chat about our shared interest in photography.",
        timestamp: new Date(Date.now() - 1000 * 60 * 1),
      },
    ]);
  }, [profile.id]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: 'current-user',
      text: newMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate reply after 1-3 seconds
    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        senderId: profile.id,
        text: getRandomReply(),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, reply]);
    }, 1000 + Math.random() * 2000);
  };

  const getRandomReply = () => {
    const replies = [
      "That's interesting!",
      "I see what you mean.",
      "Let me think about that...",
      "Thanks for sharing!",
      "I agree with you.",
      "What else would you like to discuss?",
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (isMinimized) {
    return (
      <ChatWindowContainer style={{ height: 'auto' }}>
        <ChatHeader online={profile.online} onClick={() => setIsMinimized(false)}>
          <ProfileInfo>
            <Avatar 
              online={profile.online} 
              style={{ backgroundImage: `url(${profile.avatar})` }} 
            />
            <span>{profile.name}</span>
          </ProfileInfo>
          <ChatControls>
            <FiChevronDown />
          </ChatControls>
        </ChatHeader>
      </ChatWindowContainer>
    );
  }

  return (
    <ChatWindowContainer>
      <ChatHeader online={profile.online}>
        <ProfileInfo>
          <Avatar 
            online={profile.online} 
            style={{ backgroundImage: `url(${profile.avatar})` }} 
          />
          <span>{profile.name}</span>
        </ProfileInfo>
        <ChatControls>
          <MinimizeButton onClick={() => setIsMinimized(true)}>
            <FiChevronDown />
          </MinimizeButton>
          <FiX onClick={onClose} />
        </ChatControls>
      </ChatHeader>

      <ChatBody>
        {messages.map(message => (
          <MessageBubble 
            key={message.id} 
            isCurrentUser={message.senderId === 'current-user'}
          >
            {message.text}
            <MessageTime isCurrentUser={message.senderId === 'current-user'}>
              {formatTime(message.timestamp)}
            </MessageTime>
          </MessageBubble>
        ))}
        <div ref={messagesEndRef} />
      </ChatBody>

      <ChatFooter>
        <MessageInput
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <SendButton 
          onClick={handleSendMessage} 
          disabled={newMessage.trim() === ''}
        >
          <FiSend />
        </SendButton>
      </ChatFooter>
    </ChatWindowContainer>
  );
};

export default ChatWindow;