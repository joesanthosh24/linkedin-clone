import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { signInWithGoogle } from "../../redux/actions/index";

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

const Login = ({ signIn, user }) => {
  return (
    <Container>
      {user && <Redirect to="/home" />}
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
          <Google onClick={() => signIn()}>
            <img src="/images/google.svg" alt="Google Logo" />
            Sign In With Google
          </Google>
        </Form>
      </MainSection>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInWithGoogle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
