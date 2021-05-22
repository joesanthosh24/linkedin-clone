import {
  CommonCard,
  Container,
  Photo,
  PostButton,
  IconContainer,
  PostContainer,
  PostInfo,
  Article,
  Profile,
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
      <div>
        <Article>
          <Profile>
            <a>
              <img src="/images/user.svg" alt="User" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis-icon.svg" alt="Ellipsis" />
            </button>
          </Profile>
          <p>Hello There</p>
        </Article>
      </div>
    </Container>
  );
};

export default MainContent;
