import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s ease-in;

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

export const Header = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: none;

    svg,
    img {
      pointer-events: none;

      &:active {
        fill: rgba(0, 0, 0, 0.9);
      }
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.08);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.12);
    }
  }
`;

export const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img,
  svg {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
    background-clip: content-box;
    border: 2px solid transparent;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ShareCreation = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0 12px 16px;
`;

export const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
`;

export const AssetButton = styled.button`
  margin-right: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.12);
  }

  img,
  svg {
    margin-top: 5px;
  }
`;

export const CommentAndPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > button.post {
    border-radius: 25px;
    border: none;
    padding: 10px 5px;
    margin-left: auto;
    margin-right: 15px;
    width: 65px;
    background-color: #0a66c2;
    color: #fff;
    cursor: pointer;

    &:disabled {
      background-color: rgba(0, 0, 0, 0.08);
      color: rgba(0, 0, 0, 0.3);
      cursor: not-allowed;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }

    &:hover {
      background-color: #004182;
    }
  }
`;

export const CommentOnButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 25px;
  border: none;
  margin-left: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }

  img {
    margin-right: 5px;
  }
`;

export const Editor = styled.div`
  width: 100%;
  padding-top: 12px;

  textarea {
    width: 100%;
    min-height: 90px;
    resize: none;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const UploadImage = styled.div`
  text-align: center;

  img {
    width: 100%;
  }
`;
