import { useState } from 'react';
import styled from 'styled-components';
import { mockData } from '../../../core/data/mock_data';

type UserProfileStatus = {
  isComplete: boolean;
  missingFields?: string[];
};

// Mock Data


const mockUserProfileStatus: UserProfileStatus = {
  isComplete: true, // Change to true to test recommendations view
  missingFields: ['interests', 'bio'],
};

// Styled Components
const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const ProfileCompleteAlert = styled.div`
  background-color: #fff3cd;
  color: #856404;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 5px solid #ffeeba;
`;

const AlertTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const MissingFieldsList = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1.5rem;
`;

const RecommendationsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

const RecommendationCard = styled.div`
  display: flex;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProfileImage = styled.div<{ imageUrl: string }>`
  width: 120px;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const Name = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 0.25rem 0;
  color: #2c3e50;
`;

const Phone = styled.p`
  color: #7f8c8d;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
`;

const Bio = styled.p`
  color: #34495e;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const Interests = styled.div`
  margin-bottom: 1.5rem;
`;

const InterestTag = styled.span`
  display: inline-block;
  background-color: #e0f7fa;
  color: #00838f;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CardActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const Button = styled.button<{ variant: 'accept' | 'discard' }>`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) =>
    props.variant === 'accept'
      ? `
    background-color: #4caf50;
    color: white;
    &:hover {
      background-color: #3d8b40;
    }
  `
      : `
    background-color: #f5f5f5;
    color: #333;
    &:hover {
      background-color: #e0e0e0;
    }
  `}
`;

const Recommendation = () => {
  const [recommendations, setRecommendations] = useState<AppTypes.Profile[]>(mockData.recommendations);
  const [userProfileStatus] = useState<UserProfileStatus>(mockUserProfileStatus);

  const handleAccept = (id: string) => {
    console.log('Accepted profile:', id);
    setRecommendations(recommendations.filter(profile => profile.id !== id));
  };

  const handleDiscard = (id: string) => {
    console.log('Discarded profile:', id);
    setRecommendations(recommendations.filter(profile => profile.id !== id));
  };

  return (
    <Container>
      <Title>Recommendations</Title>

      {!userProfileStatus.isComplete ? (
        <ProfileCompleteAlert>
          <AlertTitle>Complete your profile to see recommendations</AlertTitle>
          <p>Please fill out the following fields to get personalized recommendations:</p>
          <MissingFieldsList>
            {userProfileStatus.missingFields?.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </MissingFieldsList>
        </ProfileCompleteAlert>
      ) : recommendations.length > 0 ? (
        <RecommendationsGrid>
          {recommendations.map((profile) => (
            <RecommendationCard key={profile.id}>
              <ProfileImage imageUrl={profile.profilePicture} />
              <CardContent>
                <CardHeader>
                  <Name>{profile.name}</Name>
                  <Phone>{profile.phone}</Phone>
                </CardHeader>
                <Bio>{profile.bio}</Bio>
                <Interests>
                  {profile.interests.map((interest) => (
                    <InterestTag key={interest}>{interest}</InterestTag>
                  ))}
                </Interests>
                <CardActions>
                  <Button variant="accept" onClick={() => handleAccept(profile.id)}>
                    Accept
                  </Button>
                  <Button variant="discard" onClick={() => handleDiscard(profile.id)}>
                    Discard
                  </Button>
                </CardActions>
              </CardContent>
            </RecommendationCard>
          ))}
        </RecommendationsGrid>
      ) : (
        <p>No more recommendations available. Check back later!</p>
      )}
    </Container>
  );
};

export default Recommendation;