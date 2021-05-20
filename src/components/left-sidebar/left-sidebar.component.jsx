import {
  Container,
  Card,
  UserInfo,
  CardBackground,
  Photo,
  Link,
  AddPhotoText,
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
      </Card>
    </Container>
  );
};

export default LeftSidebar;
