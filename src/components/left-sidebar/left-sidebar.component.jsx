import { connect } from "react-redux";

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
          <a>
            <Photo />
            <Link>Welcome, {user ? user.displayName : "there"}!</Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span className="connections">Connections</span>
              <span className="network">Grow your network</span>
            </div>
            <img src="images/widget-icon.svg" alt="Widget" />
          </a>
        </Widget>
        <Item>
          <span className="item-img">
            <img src="/images/item-icon.svg" alt="Item" />
          </span>
          <span className="item-text">My Items</span>
        </Item>
      </ProfileCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span className="community__events">
            Events
            <img src="/images/plus-icon.svg" alt="Plus" />
          </span>
        </a>
        <a>
          <span>Follows Hashtags</span>
        </a>
        <a className="community__discover">
          <span>Discover More</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(LeftSidebar);
