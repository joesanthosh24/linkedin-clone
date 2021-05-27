import {
  Container,
  Content,
  Header,
  SharedContent,
  UserInfo,
} from "./post-modal.styles";

const PostModal = ({ closeModal }) => {
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a Post</h2>
          <button onClick={closeModal}>
            <img src="/images/close-icon.svg" alt="Close" />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            <img src="/images/user.svg" alt="User" />
            <span>Name</span>
          </UserInfo>
        </SharedContent>
      </Content>
    </Container>
  );
};

export default PostModal;
