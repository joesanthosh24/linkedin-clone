import styled from "styled-components";

export const Container = styled.div`
  grid-area: leftside;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProfileCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`;

export const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

export const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

export const Photo = styled.div`
  box-shadow: none;
  height: 70px;
  width: 70px;
  margin: -30px auto 15px;
  box-sizing: border-box;
  background-image: url("/images/photo.svg");
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  border-radius: 50%;
`;

export const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

export const AddPhotoText = styled.div`
  font-size: 12px;
  color: #0a66c2;
  margin-top: 5px;
  line-height: 1.3;
  font-weight: 400;
`;

export const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    img {
      margin-right: 10px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;

    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.333;
    }
    .connections {
      color: rgba(0, 0, 0, 0.6);
    }
    .network {
      color: rgba(0, 0, 0, 1);
    }
  }
`;

export const Item = styled.a`
  padding: 12px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const CommunityCard = styled(ProfileCard)`
  display: flex;
  flex-direction: column;
  text-align: left;

  a {
    color: black;
    font-size: 12px;
    padding: 5px 0 5px 10px;

    &:hover {
      color: #0a66c2;
    }

    &.community__discover {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid rgba(0, 0, 0, 0.15);
      padding-top: 10px;
      padding-bottom: 10px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }

    span {
      display: flex;
      align-items: center;

      &.community__events > img {
        margin-left: auto;
        margin-right: 10px;
      }
    }
  }
`;
