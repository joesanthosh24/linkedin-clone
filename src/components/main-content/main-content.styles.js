import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  color: #958b7b;
`;

export const PostButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.15);
  flex: 1;
  height: 40px;
  border-radius: 20px;
  margin-left: 10px;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.6);
  text-align: left;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const Photo = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 5px;

  button {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    img {
      margin-right: 5px;
    }
  }
`;

export const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: flex-start;

  a {
    display: flex;
    align-items: flex-start;

    img {
      height: 40px;
      width: 40px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;

      span {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);

        &:first-child {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }

  button {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      padding: 5px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.12);
    }
  }
`;

export const Description = styled.div`
  padding-left: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
`;

export const ArticleImage = styled.div`
  a {
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const SocialData = styled.div`
  padding: 5px 0 10px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);

  img {
    height: 16px;
    width: 16px;
    margin-right: 3px;
  }
`;

export const SocialReact = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    margin-right: 15px;
    padding: 15px 0;
    color: rgba(0, 0, 0, 0.6);

    span {
      margin-left: 5px;
    }
  }
`;

export const Content = styled.div`
  text-align: center;

  & > img {
    width: 30px;
  }
`;
