import styled from 'styled-components';
import { motion } from 'framer-motion'; // For subtle animations
import UserCreateForm from '../../core/auth/RegistrationForm';

export const UserCreateLayout = styled(motion.main)`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(32rem, 48rem);
  align-content: start;
  justify-content: center;
  gap: 3.2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 4.8rem 2.4rem;

  @media (min-width: 768px) {
    align-content: center;
    padding: 2.4rem;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 1.6rem;
  padding: 3.2rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05);
  border: 1px solid var(--color-grey-100);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.08);
    transform: translateY(-0.2rem);
  }
`;

export const StyledHeading = styled.h4`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-grey-800);
  text-align: center;
  margin-bottom: 2.4rem;
  position: relative;
  padding-bottom: 1.2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4rem;
    height: 0.3rem;
    background: var(--color-primary-500);
    border-radius: 0.3rem;
  }
`;

export const DecorativeElements = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  margin-bottom: 2.4rem;

  span {
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: var(--color-primary-300);
    opacity: 0.6;
  }
`;

function UserCreate() {
  return (
    <UserCreateLayout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <DecorativeElements>
          <span />
          <span />
          <span />
        </DecorativeElements>
        <StyledHeading>Create your account</StyledHeading>
        <UserCreateForm />
      </Card>
    </UserCreateLayout>
  );
}

export default UserCreate;