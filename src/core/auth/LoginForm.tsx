import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Form from "../../shared/components/Form";
import FormRowVertical from "../../shared/components/FormRowVertical";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import SpinnerMini from "../../shared/components/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      email, password );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
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
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <p>don't have a account? register <a href="/new-user-create" style={{color:"blue", textDecoration:"underline"}}>here</a>!</p>
    </Form>
  );
}

export default LoginForm;