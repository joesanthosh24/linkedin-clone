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
} from "./header.styles";

const Header = () => {
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
              <a href="/home">
                <img src="/images/nav-home.svg" alt="Nav Home" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="/network">
                <img src="/images/nav-network.svg" alt="Nav Home" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="/jobs">
                <img src="/images/nav-jobs.svg" alt="Nav Home" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="/messaging">
                <img src="/images/nav-messaging.svg" alt="Nav Home" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="/notifications">
                <img src="/images/nav-notifications.svg" alt="Nav Home" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                <img src="/images/user.svg" alt="User" />
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="Dropdown" />
                </span>
              </a>
            </User>
            <Work>
              <a href="/work">
                <img src="/images/nav-work.svg" alt="Work" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="Dropdown" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
