import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Form from "../../shared/components/Form";
import FormRowVertical from "../../shared/components/FormRowVertical";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import SpinnerMini from "../../shared/components/SpinnerMini";

function UserCreateForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setName] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !userName) return;
    // later switch it with regitration api end point.
    login(
      email, password );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="User Name">
        <Input
          type="text"
          id="userName"
          // This makes this form better for password managers
          autoComplete="username"
          value={userName}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Save" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <p>already have an account? login <a href="/login" style={{color:"blue", textDecoration:"underline"}}>here</a></p>
    </Form>
  );
}

export default UserCreateForm;