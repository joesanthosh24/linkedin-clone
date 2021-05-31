import { useState } from "react";
import { connect } from "react-redux";

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
  Description,
  ArticleImage,
  SocialData,
  SocialReact,
  Content,
} from "./main-content.styles";

import PostModal from "../../components/post-modal/post-modal.component";

const MainContent = ({ user, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <CommonCard>
        <PostContainer>
          <PostInfo>
            {user && user.photoURL ? (
              <Photo image={user.photoURL} />
            ) : (
              <Photo image="/images/user.svg" />
            )}
            <PostButton onClick={() => setIsModalOpen(true)} disabled={loading}>
              Start A Post
            </PostButton>
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
      <Content>
        {loading && <img src="/images/loader.gif" alt="Loading" />}
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
          <Description>Description</Description>
          <ArticleImage>
            <a>
              <img
                src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
                alt="Elon Musk"
              />
            </a>
          </ArticleImage>
          <SocialData>
            <img src="/images/likes.svg" alt="Likes" />
            <img src="/images/heart.svg" alt="Heart" />
            <img src="/images/clap.svg" alt="Clap" />
            <img src="/images/lightbulb.svg" alt="Lightbulb" />
            <img src="/images/maybe.svg" alt="Maybe" />
            <img src="/images/support.svg" alt="Support" />
            <span>200 * 20 comments</span>
          </SocialData>
          <SocialReact>
            <button>
              <img src="/images/like-icon.svg" alt="Like Post" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment-icon.svg" alt="Comment on Post" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/share-icon.svg" alt="Share Post" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send-icon.svg" alt="Send Post as Message" />
              <span>Send</span>
            </button>
          </SocialReact>
        </Article>
      </Content>
      {isModalOpen && <PostModal closeModal={() => setIsModalOpen(false)} />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
  loading: state.articleState.loading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
