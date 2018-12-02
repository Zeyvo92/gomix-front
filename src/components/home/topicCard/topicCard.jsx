import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

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
import topicStore from '../../../stores/topicStore';

import TopicTechno from '../../../assets/TopicTechno.png';

class TopicCard extends React.Component {
  static propTypes = {
    store: PropTypes.instanceOf(topicStore).isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    topicInfo: PropTypes.shape({
      _id: String,
      title: String,
      description: String,
    }).isRequired,
  };

  onMoreClick = () => {
    const { store, topicInfo, history } = this.props;
    store.selectTopic(topicInfo._id);
    history.push('/topic');
  };

  render() {
    const { topicInfo } = this.props;
    return (
      <Card className="topic-card">
        <CardImg top width="100%" src={TopicTechno} alt="Card image cap" />
        <CardBody>
          <CardTitle>{topicInfo.title}</CardTitle>
          <Badge color="primary" pill>
            Javascript
          </Badge>
          <Badge color="primary" pill>
            Node.js
          </Badge>
          <CardText>{topicInfo.description}</CardText>
          <Button color="danger" onClick={this.onMoreClick}>
            More..
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(observer(TopicCard));
