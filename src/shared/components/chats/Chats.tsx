import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMessageSquare } from 'react-icons/fi';
import ChatWindow from './ChatWindow';

// Types (could be in your global types)
type ChatProfile = {
  id: string;
  name: string;
  avatar: string;
  lastSeen: Date;
  interests: string[];
  online: boolean;
};

// Mock data
const mockAcceptedProfiles: ChatProfile[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastSeen: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    interests: ['Photography', 'Hiking'],
    online: true,
  },
  {
    id: '2',
    name: 'Maria Garcia',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    lastSeen: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    interests: ['Cooking', 'Travel'],
    online: false,
  },
];

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 12px;
`;

const Header = styled.h2`
  font-size: 1.8rem;
  color: #2d3748;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #4a5568;
  }
`;

const ProfileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProfileCard = styled.li`
  background: white;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Avatar = styled.div<{ online: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-right: 16px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.online ? '#48bb78' : '#a0aec0'};
    border: 2px solid white;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #2d3748;
`;

const ProfileInterests = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 6px;
`;

const InterestTag = styled.span`
  font-size: 0.75rem;
  background: #ebf8ff;
  color: #3182ce;
  padding: 2px 8px;
  border-radius: 12px;
`;

const LastSeen = styled.p`
  margin: 4px 0 0;
  font-size: 0.8rem;
  color: #718096;
`;

const ChatButton = styled.button`
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3182ce;
  }

  svg {
    font-size: 1rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #718096;
`;

const Chats = () => {
  const [profiles, setProfiles] = useState<ChatProfile[]>([]);
  const [loading, setLoading] = useState(true);

   const [activeChat, setActiveChat] = useState<ChatProfile | null>(null);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setProfiles(mockAcceptedProfiles);
      setLoading(false);
    }, 800);
  }, []);

  const handleStartChat = (profileId: string) => {
    setActiveChat(profileId)
    console.log('Starting chat with:', profileId);
    // Implement your chat initiation logic here
  };

  const formatLastSeen = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  return (
    <>
    <Container>
      <Header>
        <FiMessageSquare /> Accepted Profiles
      </Header>

      {loading ? (
        <EmptyState>Loading profiles...</EmptyState>
      ) : profiles.length > 0 ? (
        <ProfileList>
          {profiles.map(profile => (
            <ProfileCard key={profile.id}>
              <Avatar 
                online={profile.online} 
                style={{ backgroundImage: `url(${profile.avatar})` }} 
              />
              <ProfileInfo>
                <ProfileName>{profile.name}</ProfileName>
                <ProfileInterests>
                  {profile.interests.slice(0, 3).map(interest => (
                    <InterestTag key={interest}>{interest}</InterestTag>
                  ))}
                </ProfileInterests>
                <LastSeen>
                  {profile.online ? 'Online now' : `Last seen ${formatLastSeen(profile.lastSeen)}`}
                </LastSeen>
              </ProfileInfo>
              <ChatButton onClick={() => handleStartChat(profile.id)}>
                <FiMessageSquare /> Chat
              </ChatButton>
            </ProfileCard>
          ))}
        </ProfileList>
      ) : (
        <EmptyState>
          <p>No accepted profiles yet</p>
          <p>Your matches will appear here once you accept recommendations</p>
        </EmptyState>
      )}
    </Container>
      {activeChat && (
        <ChatWindow 
          profile={activeChat} 
          onClose={() => setActiveChat(null)} 
        />
      )}
    </>
  );
};

export default Chats;