import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import {
  Container,
  ProfileCard,
  UserInfo,
  CardBackground,
  Photo,
  Link,
  AddPhotoText,
  Widget,
  Item,
  CommunityCard,
} from "./left-sidebar.styles";

const LeftSidebar = ({ user }) => {
  return (
    <Container>
      <ProfileCard>
        <UserInfo>
          <CardBackground />
          <RouterLink to="/home">
            <Photo />
            <Link>Welcome, {user ? user.displayName : "there"}!</Link>
          </RouterLink>
          <RouterLink to="/home">
            <AddPhotoText>Add a Photo</AddPhotoText>
          </RouterLink>
        </UserInfo>
        <Widget>
          <RouterLink to="/home">
            <div>
              <span className="connections">Connections</span>
              <span className="network">Grow your network</span>
            </div>
            <img src="images/widget-icon.svg" alt="Widget" />
          </RouterLink>
        </Widget>
        <Item>
          <span className="item-img">
            <img src="/images/item-icon.svg" alt="Item" />
          </span>
          <span className="item-text">My Items</span>
        </Item>
      </ProfileCard>
      <CommunityCard>
        <RouterLink to="/home">
          <span>Groups</span>
        </RouterLink>
        <RouterLink to="/home">
          <span className="community__events">
            Events
            <img src="/images/plus-icon.svg" alt="Plus" />
          </span>
        </RouterLink>
        <RouterLink to="/home">
          <span>Follows Hashtags</span>
        </RouterLink>
        <RouterLink to="/home" className="community__discover">
          <span>Discover More</span>
        </RouterLink>
      </CommunityCard>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(LeftSidebar);
