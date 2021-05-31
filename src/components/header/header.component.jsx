import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  Container,
  Content,
  Logo,
  Search,
  SearchIcon,
  Nav,
  NavListWrap,
  NavList,
  User,
  Work,
  SignOut,
} from "./header.styles";

import { signOut } from "../../redux/actions/index";

const Header = ({ signOut, user }) => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/home">
            <img src="/images/home-logo.svg" alt="Home Logo" />
          </Link>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="Search" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <Link to="/home">
                <img src="/images/nav-home.svg" alt="Nav Home" />
                <span>Home</span>
              </Link>
            </NavList>
            <NavList>
              <Link to="/home">
                <img src="/images/nav-network.svg" alt="Nav Home" />
                <span>My Network</span>
              </Link>
            </NavList>
            <NavList>
              <Link to="/home">
                <img src="/images/nav-jobs.svg" alt="Nav Home" />
                <span>Jobs</span>
              </Link>
            </NavList>
            <NavList>
              <Link onTouchEnd="/home">
                <img src="/images/nav-messaging.svg" alt="Nav Home" />
                <span>Messaging</span>
              </Link>
            </NavList>
            <NavList>
              <Link to="/home">
                <img src="/images/nav-notifications.svg" alt="Nav Home" />
                <span>Notifications</span>
              </Link>
            </NavList>
            <User>
              <a href="/home">
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="User" />
                ) : (
                  <img src="/images/user.svg" alt="User no pic" />
                )}
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="Dropdown" />
                </span>
              </a>
              <SignOut onClick={() => signOut()}>
                <p>Sign Out</p>
              </SignOut>
            </User>
            <Work>
              <Link to="/home">
                <img src="/images/nav-work.svg" alt="Work" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="Dropdown" />
                </span>
              </Link>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
