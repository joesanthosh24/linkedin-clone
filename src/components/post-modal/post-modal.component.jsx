import { useState, useEffect } from "react";

import {
  Container,
  Content,
  Header,
  SharedContent,
  UserInfo,
  ShareCreation,
  AttachAssets,
  AssetButton,
  CommentAndPost,
  CommentOnButton,
  Editor,
} from "./post-modal.styles";

const PostModal = ({ closeModal }) => {
  const [postMessage, setPostMessage] = useState("");

  const handleClose = () => {
    setPostMessage("");
    closeModal();
  };

  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a Post</h2>
          <button onClick={handleClose}>
            <img src="/images/close-icon.svg" alt="Close" />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            <img src="/images/user.svg" alt="User" />
            <span>Name</span>
          </UserInfo>
          <Editor>
            <textarea
              value={postMessage}
              onChange={(e) => setPostMessage(e.target.value)}
              placeholder="What do you want to talk about?"
              autoFocus={true}
            ></textarea>
          </Editor>
        </SharedContent>
        <ShareCreation>
          <AttachAssets>
            <AssetButton>
              <img src="/images/share-image.svg" alt="Share Picture" />
            </AssetButton>
            <AssetButton>
              <img src="/images/share-video.svg" alt="Share Video" />
            </AssetButton>
            <AssetButton>
              <img src="/images/share-document.svg" alt="Share Document" />
            </AssetButton>
            <AssetButton>
              <img src="/images/share-hiring.svg" alt="Share Hiring" />
            </AssetButton>
            <AssetButton>
              <img src="/images/share-occasion.svg" alt="Share Occasion" />
            </AssetButton>
            <AssetButton>
              <img src="/images/share-poll.svg" alt="Share Poll" />
            </AssetButton>
            <AssetButton>
              <img src="/images/ellipsis-icon.svg" alt="Ellipsis" />
            </AssetButton>
          </AttachAssets>
          <CommentAndPost>
            <CommentOnButton>
              <img src="/images/comment-icon.svg" alt="Comment" />
              <span>Anyone</span>
            </CommentOnButton>
            <button disabled={!postMessage ? true : false} className="post">
              Post
            </button>
          </CommentAndPost>
        </ShareCreation>
      </Content>
    </Container>
  );
};

export default PostModal;
