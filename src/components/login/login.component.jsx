import { Link } from "react-router-dom";

import {
  Container,
  Nav,
  JoinLink,
  SignInButton,
  MainSection,
  SectionContent,
  Form,
  Google,
} from "./login.styles";

const Login = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src="/images/login-logo.svg" alt="Login Logo" />
        </Link>
        <div>
          <JoinLink>Join Now</JoinLink>
          <SignInButton>Sign In</SignInButton>
        </div>
      </Nav>
      <MainSection>
        <SectionContent>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="Login Hero" />
        </SectionContent>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="Google Logo" />
            Sign In With Google
          </Google>
        </Form>
      </MainSection>
    </Container>
  );
};

export default Login;
