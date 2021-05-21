import {
  Container,
  FollowCard,
  Title,
  FollowLinks,
  Avatar,
  Recommendations,
} from "./right-sidebar.styles";

const RightSidebar = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          Add To Your Feed
          <img src="/images/feed-icon.svg" alt="Feed" />
        </Title>
        <FollowLinks>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FollowLinks>
        <Recommendations>
          <span>View All Recommendations</span>
          <img src="/images/right-icon.svg" alt="Right" />
        </Recommendations>
      </FollowCard>
    </Container>
  );
};

export default RightSidebar;
