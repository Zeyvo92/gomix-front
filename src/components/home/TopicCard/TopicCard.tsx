import './TopicCard.css';

import * as React from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle
} from 'reactstrap';

interface Props {
  onMore: any;
}

class TopicCard extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <Card className="topic-card">
        <CardImg
          top={true}
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Placeholder&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            Backend Developer{' '}
            <Badge color="info" pill>
              Javascript
            </Badge>{' '}
            <Badge color="info" pill>
              Node.js
            </Badge>
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button color="danger" onClick={this.props.onMore}>
            More..
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default TopicCard;
