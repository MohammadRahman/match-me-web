import styled from "styled-components";
import Heading from "../../shared/components/Heading";
import LoginForm from "../../core/auth/LoginForm";
import { Card, DecorativeElements, StyledHeading, UserCreateLayout } from "./UserCreate";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
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
        <StyledHeading>Login to your account</StyledHeading>
        <LoginForm />
      </Card>
    </UserCreateLayout>
  );
}

export default Login;