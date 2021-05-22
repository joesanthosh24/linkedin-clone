import {
  CommonCard,
  Container,
  Photo,
  PostButton,
  IconContainer,
  PostContainer,
  PostInfo,
} from "./main-content.styles";

const MainContent = () => {
  return (
    <Container>
      <CommonCard>
        <PostContainer>
          <PostInfo>
            <Photo />
            <PostButton>Start A Post</PostButton>
          </PostInfo>
          <IconContainer>
            <button>
              <img src="/images/photo-icon.svg" alt="Photo" />
              Photo
            </button>
            <button>
              <img src="/images/video-icon.svg" alt="Photo" />
              Video
            </button>
            <button>
              <img src="/images/event-icon.svg" alt="Photo" />
              Event
            </button>
            <button>
              <img src="/images/article-icon.svg" alt="Photo" />
              Write Article
            </button>
          </IconContainer>
        </PostContainer>
      </CommonCard>
    </Container>
  );
};

export default MainContent;
