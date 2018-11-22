import "./Home.css";

import * as React from "react";
import { CardColumns } from "reactstrap";
import Menu from "./Menu/Menu";
import TopicCard from "./TopicCard/TopicCard";

class Home extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="Home">
        <Menu />
        <CardColumns className="dashboard">
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </CardColumns>
      </div>
    );
  }
}

export default Home;
