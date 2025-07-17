import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import { useState } from "react";
import { StyledNavLink } from "./MainNav";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const [user, setUser] = useState(null)
  return (
    <StyledHeader>
     {user != null ? <UserAvatar /> : (
      <li style={{ listStyle: "none" }}>
        <StyledNavLink to="/login">
          <span>Login</span>
        </StyledNavLink>
      </li>
     )} 
      {/* <HeaderMenu /> */}
    </StyledHeader>
  );
}

export default Header;