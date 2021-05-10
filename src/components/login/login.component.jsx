import { Link } from "react-router-dom";

import { Container, Nav, JoinLink, SignInButton } from "./login.styles";

const Login = () => {
  return (
    <Container>
      <Nav>
        <Link href="/">
          <img src="/images/login-logo.svg" alt="Login Logo" />
        </Link>
        <div>
          <JoinLink>Join Now</JoinLink>
          <SignInButton>Sign In</SignInButton>
        </div>
      </Nav>
    </Container>
  );
};

export default Login;
