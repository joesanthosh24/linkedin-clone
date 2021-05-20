import { Container, Section, Layout } from "./home.styles";

import LeftSidebar from "../../components/left-sidebar/left-sidebar.component";
import Main from "../../components/main-content/main-content.component";
import RightSidebar from "../../components/right-sidebar/right-sidebar.component";

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record tim with Upwork and keep business moving
        </p>
      </Section>
      <Layout>
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </Layout>
    </Container>
  );
};

export default Home;
