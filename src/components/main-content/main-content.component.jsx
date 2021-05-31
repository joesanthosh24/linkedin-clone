import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getArticles } from "../../redux/actions";

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

const MainContent = ({ user, loading, getArticles, articles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getArticles();
  }, []);

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
        {articles.map((article) => (
          <Article>
            <Profile>
              <a>
                <img src="/images/user.svg" alt="User" />
                <div>
                  <span>{article.actor.title}</span>
                  <span>{article.actor.description}</span>
                  <span>Date</span>
                </div>
              </a>
              <button>
                <img src="/images/ellipsis-icon.svg" alt="Ellipsis" />
              </button>
            </Profile>
            <Description>{article.description}</Description>
            {article.sharedImg ? (
              <ArticleImage>
                <a>
                  <img src={article.sharedImg} alt={article.description} />
                </a>
              </ArticleImage>
            ) : article.video ? (
              <video width="100%" height="100%" controls type="video/mp4">
                <source src={article.video} />
              </video>
            ) : (
              ""
            )}
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
        ))}
      </Content>
      {isModalOpen && <PostModal closeModal={() => setIsModalOpen(false)} />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
  loading: state.articleState.loading,
  articles: state.articleState.articles,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
