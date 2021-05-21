import styled from "styled-components";

export const Container = styled.div`
  grid-area: rightside;
  margin-left: 10px;
  margin-right: 10px;
`;

export const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const FollowLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: auto;

      button {
        border: 2px solid rgb(0, 0, 0, 0.6);
        border-radius: 15px;
        padding: 5px 15px;
        color: rgb(0, 0, 0, 0.6);
      }
    }
  }
`;

export const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const Recommendations = styled.div`
  display: flex;
  align-items: center;
  color: #0a66c2;
  margin-top: 5px;
  font-size: 14px;

  img {
    margin-left: 10px;
  }
`;

export const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;
