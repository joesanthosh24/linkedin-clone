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
            <NavList>
              <a>
                <img src="/images/nav-home.svg" alt="Nav Home" />
                <span>Home</span>
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
