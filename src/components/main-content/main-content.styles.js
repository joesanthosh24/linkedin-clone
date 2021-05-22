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
  background-image: url("/images/user.svg");
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
