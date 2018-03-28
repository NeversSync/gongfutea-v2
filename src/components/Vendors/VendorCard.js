import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import avatarPhoto from '../../assets/img/teacup.jpg';

export default class VendorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({ expanded: expanded });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  render() {
    const { name, website, description, categories } = this.props.vendor;
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={name}
          subtitle={website}
          avatar={avatarPhoto}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title={name} subtitle={website} expandable={true} />
        <CardText expandable={true}>
          {description} {categories}
        </CardText>
        <CardActions>
          <FlatButton label="Website" onClick={this.handleExpand} />
          <FlatButton label="Contact" onClick={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}