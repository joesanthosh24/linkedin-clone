import {
  Container,
  Card,
  UserInfo,
  CardBackground,
  Photo,
  Link,
  AddPhotoText,
  Widget,
  Item,
} from "./left-sidebar.styles";

const LeftSidebar = () => {
  return (
    <Container>
      <Card>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, There!</Link>
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
      </Card>
    </Container>
  );
};

export default LeftSidebar;
