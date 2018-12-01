import React from 'react';

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';

import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

class TopicCard extends React.Component {
  static propTypes = {
    store: Function,
    topicInfo: Object,
  }.isRequired;

  onMoreClick = () => {
    const { store, topicInfo, history } = this.props;
    store.selectTopic(topicInfo.id);
    history.push('/topic');
  };

  render() {
    const { topicInfo } = this.props;
    return (
      <Card className="topic-card">
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Placeholder&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            {topicInfo.title}
            <Badge color="info" pill>
              Javascript
            </Badge>
            <Badge color="info" pill>
              Node.js
            </Badge>
          </CardTitle>
          <CardText>{topicInfo.desc}</CardText>
          <Button color="danger" onClick={this.onMoreClick}>
            More..
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(observer(TopicCard));
